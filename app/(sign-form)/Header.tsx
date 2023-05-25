import Link from "next/link";
import URLs from "../services/urls";

export default function Header({

}) {
    return (
        <header className="fixed inset-x-0 top-0 h-12 bg-gray-100">
            <section className="mx-auto max-w-[1200px] h-full flex justify-between items-center">
                Logo
                <nav className="flex gap-5 items-center">
                    <Link href={URLs.LogIn}>Log in</Link>
                    <Link href={URLs.SignUp}>Sign up</Link>
                </nav>
            </section>
        </header>
    )
}