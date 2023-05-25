import Link from "next/link";
import URLs from "../services/urls";
import Header from "./Header";

export default function Layout({
    children
}: {
    children: React.ReactNode,
}) {
    return (
        <div className="">
            <Header />
			<main className="mx-auto max-w-[1200px] h-screen flex items-center justify-center">
				<section className="w-[960px] h-[580px] flex gap-4 p-5 border-2 bg-gray-100">
						{children}
                </section>
			</main>
        </div>
    )
}