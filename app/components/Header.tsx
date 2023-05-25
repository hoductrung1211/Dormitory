import Link from "next/link";
import URLs from "../services/urls";
import Logo from "../(sign-form)/Logo";

export default function Header({

}) {
    return (
        <header className="fixed inset-x-0 top-0 h-14 bg-gray-50 shadow-md z-20">
            <section className="container h-full flex justify-between items-center">
                <Link href={URLs.Home}>
                    <Logo />
                </Link>
                <nav className="flex gap-6 items-center">
                    <Link href={URLs.LogIn}>Log in</Link>
                    <Link href={URLs.SignUp}>Sign up</Link>
                </nav>
            </section>
        </header>
    )
}