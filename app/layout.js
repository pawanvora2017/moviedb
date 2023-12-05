import Link from "next/link";

import "./globals.css";
import { Montserrat } from "next/font/google";

export const metadata = {
	title: "Movie DB App",
	description: "Learning Next.js (version 13)...",
};

const montserrat = Montserrat({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<header className="flex justify-between py-6 px-12 bg-slate-950">
					<h1 className="text-2xl">
						<Link href="/">MovieDB</Link>
					</h1>
					<nav>
						<ul className="flex gap-12">
							<li>
								<Link href="/">Home</Link>
							</li>
							<li>
								<Link href="/about">About</Link>
							</li>
						</ul>
					</nav>
				</header>
				{children}
				<footer className="fixed bottom-0 left-0 bg-slate-900 mt-32 w-full p-6 text-center text-sm text-slate-500">
					<p>© 2023 MovieDB</p>
				</footer>
			</body>
		</html>
	);
}
