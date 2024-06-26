// const data = [
// 	{
// 		id: 1,
// 		title: "The Lord of the Rings",
// 		publicationDate: "1954-07-29",
// 		author: "J. R. R. Tolkien",
// 		genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
// 		hasMovieAdaptation: true,
// 		pages: 1216,
// 		translations: {
// 			spanish: "El señor de los anillos",
// 			chinese: "魔戒",
// 			french: "Le Seigneur des anneaux",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.52,
// 				ratingsCount: 630994,
// 				reviewsCount: 13417,
// 			},
// 			librarything: {
// 				rating: 4.53,
// 				ratingsCount: 47166,
// 				reviewsCount: 452,
// 			},
// 		},
// 	},
// 	{
// 		id: 2,
// 		title: "The Cyberiad",
// 		publicationDate: "1965-01-01",
// 		author: "Stanislaw Lem",
// 		genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
// 		hasMovieAdaptation: false,
// 		pages: 295,
// 		translations: {},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.16,
// 				ratingsCount: 11663,
// 				reviewsCount: 812,
// 			},
// 			librarything: {
// 				rating: 4.13,
// 				ratingsCount: 2434,
// 				reviewsCount: 0,
// 			},
// 		},
// 	},
// 	{
// 		id: 3,
// 		title: "Dune",
// 		publicationDate: "1965-01-01",
// 		author: "Frank Herbert",
// 		genres: ["science fiction", "novel", "adventure"],
// 		hasMovieAdaptation: true,
// 		pages: 658,
// 		translations: {
// 			spanish: "",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.25,
// 				ratingsCount: 1142893,
// 				reviewsCount: 49701,
// 			},
// 		},
// 	},
// 	{
// 		id: 4,
// 		title: "Harry Potter and the Philosopher's Stone",
// 		publicationDate: "1997-06-26",
// 		author: "J. K. Rowling",
// 		genres: ["fantasy", "adventure"],
// 		hasMovieAdaptation: true,
// 		pages: 223,
// 		translations: {
// 			spanish: "Harry Potter y la piedra filosofal",
// 			korean: "해리 포터와 마법사의 돌",
// 			bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
// 			portuguese: "Harry Potter e a Pedra Filosofal",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.47,
// 				ratingsCount: 8910059,
// 				reviewsCount: 140625,
// 			},
// 			librarything: {
// 				rating: 4.29,
// 				ratingsCount: 120941,
// 				reviewsCount: 1960,
// 			},
// 		},
// 	},
// 	{
// 		id: 5,
// 		title: "A Game of Thrones",
// 		publicationDate: "1996-08-01",
// 		author: "George R. R. Martin",
// 		genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
// 		hasMovieAdaptation: true,
// 		pages: 835,
// 		translations: {
// 			korean: "왕좌의 게임",
// 			polish: "Gra o tron",
// 			portuguese: "A Guerra dos Tronos",
// 			spanish: "Juego de tronos",
// 		},
// 		reviews: {
// 			goodreads: {
// 				rating: 4.44,
// 				ratingsCount: 2295233,
// 				reviewsCount: 59058,
// 			},
// 			librarything: {
// 				rating: 4.36,
// 				ratingsCount: 38358,
// 				reviewsCount: 1095,
// 			},
// 		},
// 	},
// ];

// function getBooks() {
// 	return data;
// }

// function getBook(id) {
// 	return data.find((d) => d.id === id);
// }

// // const book = getBook(2);
// // const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;
// // console.log(author, title, genres);

// // // const primaryGenre = genres[0];
// // // const secondaryGenre = genres[1];
// // // Destructuring and rest and spread
// // const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// // console.log(primaryGenre, secondaryGenre);
// // console.log(otherGenres);
// // // Spread an array and add a new genre
// // const newGenres = [...genres, "epic fantasy"];

// // console.log(newGenres);

// // // With objects

// // const updatedBook = {
// // 	...book,
// // 	// Adding a new property
// // 	moviePublicationDate: "2001-12-19",
// // 	// Overwriting existing values
// // 	pages: 1210,
// // };

// // console.log(updatedBook);

// // const summary = `${title} is a book`;
// // summary;
// // // Ternaries instead of if/else statements
// // const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
// // pagesRange;

// // // Arrow functions

// // // old way
// // // function getYear(str) {
// // // 	return str.split("-")[0];
// // // }
// // // Arrow function way
// // const getYear = (str) => str.split("-")[0];
// // console.log(getYear(publicationDate));

// // // Short circuiting
// // // With the && value we get the first false value
// // console.log(hasMovieAdaptation && "This book has a movie"); //short circuits because there is no movie
// // console.log(0 && "some string"); // Same thing, short circuits because 0 is false

// // console.log(0 || null || true); //works the opposite way and returns true because 0 and null are falsy values //works the opposite way and returns true because 0 and null are falsy values

// // // With nullish coalescent operator we can return 0 instead of it returning a falsy value - use ?? instead of ||
// // const count = book.reviews.librarything.reviewsCount ?? "no data";
// // console.log(count);

// // // Optional chaining - only read the property after if it exists

// // const librarything = book.reviews?.librarything?.reviewsCount;
// // librarything;
// const books = getBooks();
// books;

// // Array methods - starting with...

// // MAP
// const bookTitle = books.map((book) => book.title);

// console.log(bookTitle);

// const essentialData = books.map((book) => ({
// 	title: book.title,
// 	author: book.author,
// }));
// console.log(essentialData);

// // Filter method
// const longbooks = books.filter((book) => book.pages > 500);
// console.log(longbooks);

// // Sort
// const numbersArr = [3, 5, 6, 1, 8, 2];
// const sortedNumbers = numbersArr.slice().sort((a, b) => a - b);
// numbersArr;
// sortedNumbers;

// // Sort with objects

// const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
// sortedByPages;

// // Working with Immutable Arrays
// // Add a book object to array

// const newBook = {
// 	id: 6,
// 	title: "Harry Potter and the Chamber of Secrets",
// 	author: "J.K. Rowling",
// };

// const booksAfterAdd = [...books, newBook];
// booksAfterAdd;

// // Delete a book object
// const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// booksAfterDelete;

// // Update book object
// const booksAfterUpdate = booksAfterDelete.map((book) => (book.id === 1 ? { ...book, pages: 1 } : book));

// booksAfterUpdate;

// Async JavaScript

// Promises
fetch("https://jsonplaceholder.typicode.com/todos/")
	.then((res) => res.json())
	.then((data) => console.log(data));
console.log("Test");

// Async/await
async function getTodos() {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
	const data = await res.json();
	console.log(data);
}
getTodos();
console.log("Test2");
