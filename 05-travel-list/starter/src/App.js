import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	}

	function clearList() {
		const confirmed = window.confirm("Are you sure you want to clear your list?");
		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItems={handleToggleItem}
				onClearList={clearList}
			/>
			<Stats items={items} />
		</div>
	);
}
