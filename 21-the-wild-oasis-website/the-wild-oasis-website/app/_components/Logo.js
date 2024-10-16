import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
	return (
		<Link href="/" className="flex items-center gap-4 z-10">
			{/* First way of using the Image component */}
			{/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}

			{/* Second way, importing the image first, where we don't have to specify the height or width */}
			<Image src={logo} quality={100} height="60" width="60" alt="The Wild Oasis logo" />
			<span className="text-xl font-semibold text-primary-100">The Wild Oasis</span>
		</Link>
	);
}

export default Logo;
