import Logo from "./components/Logo";
import Navigation from "./components/navigation";

export const metadata = {
	title: "The Wild Oasis",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header>
					<Logo />
				</header>
				<Navigation />
				<main>{children}</main>
			</body>
		</html>
	);
}
