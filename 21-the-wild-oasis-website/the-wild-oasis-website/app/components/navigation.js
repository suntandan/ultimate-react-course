import Link from "next/link";

export default function Navigation() {
	return (
		<ul>
			<li>
				<Link href="/cabins">Cabins</Link>
				<Link href="/account">Account</Link>
				<Link href="/about">About</Link>
			</li>
		</ul>
	);
}
