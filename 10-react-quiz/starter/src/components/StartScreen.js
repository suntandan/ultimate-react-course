import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
	const { numQuestions, dispatch } = useQuiz();
	return (
		<div>
			<h2>Welcome to The React Quiz!</h2>
			<h3>{numQuestions} question to test your React mastery</h3>
			<button className="btn btn-uis" onClick={() => dispatch({ type: "start" })}>
				Let's start
			</button>
		</div>
	);
}

export default StartScreen;
