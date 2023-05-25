import URLs from "@/app/services/urls";
import Image from "next/image";
import Link from "next/link";

export default function SignUpSuc() {
    return (
        <section className="relative w-1/3 h-full pt-10">
            <div className="relative h-40">
                <Image
                    src="/login/welcome.svg"
                    fill 
                    alt="sign up successfully image"
                />
            </div>
            <h2 className="mt-12 text-primary text-2xl font-bold text-center">Sign up successfully!</h2>
            <Link className="absolute bottom-0 left-1/2 -translate-x-1/2 underline text-center" href={URLs.LogIn}>Redirect to Log in</Link>
        </section>
    )
}