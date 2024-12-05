"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./Auth";
import { supabase } from "./supabase";

export async function updateGuest(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be signed in to update your profile");

	const nationalId = formData.get("nationalId");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId)) throw new Error("Please provide a valid National Id");

	const updateData = { nationality, countryFlag, nationalId };

	const { data, error } = await supabase.from("guests").update(updateData).eq("id", session.user.guestid);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

export async function signInAction() {
	await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
	await signOut({ redirectTo: "/" });
}
