export default function Stats({ items }) {
	if (!items.length)
		return (
			<footer className="stats">
				<p>Start adding some items to your packing list! 🚀</p>
			</footer>
		);
	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = numItems > 0 ? Math.round((numPacked / numItems) * 100) : 0;
	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? "You got everything! Ready to go! 🛫"
					: `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
}
