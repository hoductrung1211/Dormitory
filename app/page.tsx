import Image from "next/image";
import Header from "./components/Header";

export default function Page() {
	return (
		<>
			<Header />
			<main className="">
				<Hero />
				<About />
				<Options />
				<FAQ />
			</main>
			<Footer />
		</>
	)
}

function Hero() {
	return (
		<section className="pt-14 even:bg-gray-50">
			<div className="container flex h-[600px] py-8">
				<section className="w-2/3  flex flex-col gap-5 justify-center">
					<h3 className="flex flex-col text-3xl font-extrabold">
						<p>Live <span className="text-primary">Better</span>, Learn <span className="text-primary">Better</span>:</p>
						<p>Welcome to Your New Home</p>
					</h3>
					<p>Experience the Ultimate College Lifestyle at Our Modern and Affordable Dormitory. Enjoy 24/7 Security, On-Site Dining, Free Wi-Fi, and Spacious Rooms with Stunning Views. Join a Thriving Community of Students and Make Lifelong Memories in Your Home Away from Home.</p>
					<div className="flex gap-5 text-lg font-bold ">
						<button className="px-4 py-2 rounded-md bg-gray-200">Contact us</button>
						<button className="px-4 py-2 rounded-md bg-primary text-white">Book a room</button>
					</div>
				</section>
				<section className="relative w-1/3 ">
					<Image 
						className="object-contain"
						src="/home/hero.jpg" 
						fill 
						alt="hero image" 
					/>
				</section>
			</div>
		</section>
	)
}

function About() {
	return (
		<section className="pt-14 h-screen even:bg-gray-50">
			<div className="container  h-full"></div>
		</section>
	)
}

function Options() {
	return (
		<section className="pt-14 h-screen even:bg-gray-50">
			<div className="container  h-full"></div>
		</section>
	)
}

function FAQ() {
	return (
		<section className="pt-14 h-screen even:bg-gray-50">
			<div className="container  h-full"></div>
		</section>
	)
}

function Footer() {
	return (
		<footer>
			<div className="mx-auto max-w-[1200px] h-screen "></div>
		</footer>
	)
}