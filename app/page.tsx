'use client';
import Link from "next/link";
import URLs from "./services/urls";

 // Jep! client component!
export default function Page() {
	return (
		<div className="">
			<header className="fixed inset-x-0 top-0 h-12 bg-gray-100">
				<div className="mx-auto max-w-[1200px] h-full flex justify-between items-center">
					Logo
					<nav className="flex gap-5 items-center">
						<Link href={URLs.LogIn}>Log in</Link>
						<Link href={URLs.SignUp}>Sign up</Link>
					</nav>
				</div>
			</header>
			<main className="bg-blue-200">
				<div className="mx-auto max-w-[1200px] h-screen "></div>
			</main>
			<footer className="bg-green-200">
				<div className="mx-auto max-w-[1200px] h-screen "></div>
			</footer>
		</div>
	)
}