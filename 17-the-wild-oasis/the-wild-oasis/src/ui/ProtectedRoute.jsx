import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
	height: 100vh;
	background-color: var() (--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();

	// 1. Load the authenticated user
	const { isAuthenticated, isPending, fetchStatus } = useUser();

	// 2. if user is not authenticated, redirect to login
	useEffect(
		function () {
			if (!isAuthenticated && !isPending && fetchStatus !== "fetching") navigate("/login");
		},
		[isPending, navigate, isAuthenticated, fetchStatus]
	);

	// 3. While loading, show spinner
	if (isPending)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);
	// 4. if user is authenticated, show the children

	if (isAuthenticated) return children;
}

export default ProtectedRoute;
