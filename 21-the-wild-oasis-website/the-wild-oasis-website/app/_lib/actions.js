"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./Auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";

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

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
