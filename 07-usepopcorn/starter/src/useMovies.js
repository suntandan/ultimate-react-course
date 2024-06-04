import { useState, useEffect } from "react";

const KEY = "8724f54";

export function useMovies(query) {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(
		function () {
			const controller = new AbortController();

			async function fetchMovies() {
				try {
					setIsLoading(true);
					setError("");
					const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

					if (!res.ok) throw new Error("Failed to fetch movies");

					const data = await res.json();
					if (data.Response === "False") throw new Error(" Movie not found");
					setMovies(data.Search);
					setError("");
				} catch (err) {
					console.error(err.message);
					if (err.name !== "AbortError") {
						setError(err.message);
					}
				} finally {
					setIsLoading(false);
				}
			}
			if (query.length < 1) {
				setMovies([]);
				setError("");
				return;
			}
			// handleCloseMovie();
			fetchMovies();

			return function () {
				controller.abort();
			};
		},
		[query]
	);
	return { movies, isLoading, error };
}
