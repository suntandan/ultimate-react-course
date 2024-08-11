import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkmode, setIsDarkmode] = useLocalStorageState(
		window.matchMedia("(prefers-color-scheme: dark").matches,
		"isDarkmode"
	);

	useEffect(
		function () {
			if (isDarkmode) {
				document.documentElement.classList.add("dark-mode");
				document.documentElement.classList.remove("light-mode");
			} else {
				document.documentElement.classList.add("light-mode");
				document.documentElement.classList.remove("dark-mode");
			}
		},
		[isDarkmode]
	);

	function toggleDarkmode() {
		setIsDarkmode((isDark) => !isDark);
	}

	return <DarkModeContext.Provider value={{ isDarkmode, toggleDarkmode }}>{children}</DarkModeContext.Provider>;
}

function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context === undefined) throw new Error("Darkmode context was used outside of its provider");

	return context;
}

export { DarkModeProvider, useDarkMode };
