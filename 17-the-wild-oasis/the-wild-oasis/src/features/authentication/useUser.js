import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useUser() {
	const {
		isPending,
		data: user,
		fetchStatus,
	} = useQuery({
		queryKey: ["user"],
		queryFn: getCurrentUser,
	});

	return { isPending, user, fetchStatus, isAuthenticated: user?.role === "authenticated" };
}
