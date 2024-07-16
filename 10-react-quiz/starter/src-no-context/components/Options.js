function Options({ question, answer, dispatch }) {
	const hasAnswered = answer !== null;

	return (
		<div className="options">
			{question.options.map((option, index) => (
				<button
					className={`btn btn-option ${index === answer ? "answer" : ""} ${
						hasAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""
					}`}
					onClick={() => dispatch({ type: "newAnswer", payload: index })}
					key={option}
					disabled={answer !== null}>
					{option}
				</button>
			))}
		</div>
	);
}

export default Options;
