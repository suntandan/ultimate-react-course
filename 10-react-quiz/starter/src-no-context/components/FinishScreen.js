function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
	const percentage = (points / maxPossiblePoints) * 100;

	let emoji;
	if (percentage === 100) emoji = "🎉";
	if (percentage >= 80) emoji = "👏";
	if (percentage >= 60) emoji = "🙂";
	if (percentage <= 50) emoji = "😬";

	return (
		<div>
			<p className="result">
				You scored <strong>{points}</strong> out of {maxPossiblePoints} points ({Math.ceil(percentage)}% {emoji})
			</p>
			<p className="highscore">(Highscore: {highscore} points)</p>
			<button className="btn btn-ui" onClick={() => dispatch({ type: "restart" })}>
				Restart Quiz
			</button>
		</div>
	);
}

export default FinishScreen;
