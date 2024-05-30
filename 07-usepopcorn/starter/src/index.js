import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// import TextExpanderComp from "./TextExpander";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		{/* <StarRating maxRating={5} defaultRating={0} /> */}
		{/* <TextExpanderComp></TextExpanderComp> */}
	</React.StrictMode>
);
