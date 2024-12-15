"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./Auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";

export async function updateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be signed in to update your profile");

	const nationalId = formData.get("nationalId");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) throw new Error("Please provide a valid National Id");

	const updateData = { nationality, countryFlag, nationalId };

	const { data, error } = await supabase.from("guests").update(updateData).eq("id", session.user.guestid);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile"); // Revalidate the profile page
}

export async function createBooking(bookingData, formData) {
	const session = await auth();
	if (!session) throw new Error("You must be signed in to create a reservation");

	const newBooking = {
		...bookingData,
		guestsId: session.user.guestid,
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
		extrasPrice: 0,
		totalPrice: bookingData.cabinPrice,
		isPaid: false,
		hasBreakfast: false,
		status: "unconfirmed",
	};

	const { error } = await supabase
		.from("bookings")
		.insert([newBooking])
		// So that the newly created object gets returned!
		.select()
		.single();

	if (error) {
		console.error(error);
		throw new Error("Booking could not be created");
	}
	revalidatePath(`/cabins/${bookingData.cabinId}`); // Revalidate the cabin page

	redirect("/cabins/thankyou");
}

export async function deleteReservation(bookingId) {
	const session = await auth();
	if (!session) throw new Error("You must be signed in to delete a reservation");

	const guestBookings = await getBookings(session.user.guestid);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId)) throw new Error("You are only allowed to delete your own reservations");

	const { error } = await supabase.from("bookings").delete().eq("id", bookingId);

	if (error) {
		console.error(error);
		throw new Error("Booking could not be deleted");
	}
	revalidatePath("/account/reservations"); // Revalidate the reservations page
}

export async function updateBooking(formData) {
	const bookingId = Number(formData.get("bookingId"));
	const session = await auth();
	if (!session) throw new Error("You must be signed in to update a reservation");

	const guestBookings = await getBookings(session.user.guestid);
	const guestBookingIds = guestBookings.map((booking) => booking.id);

	if (!guestBookingIds.includes(bookingId)) throw new Error("You are only allowed to delete your own reservations");
	const updateData = {
		numGuests: Number(formData.get("numGuests")),
		observations: formData.get("observations").slice(0, 1000),
	};

	const { error } = await supabase.from("bookings").update(updateData).eq("id", bookingId).select().single();

	if (error) {
		throw new Error("Booking could not be updated");
	}
	revalidatePath("/account/reservations"); // Revalidate the reservations page
	revalidatePath(`/account/reservations/edit/${bookingId}`); // Revalidate the edit page

	redirect("/account/reservations");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
