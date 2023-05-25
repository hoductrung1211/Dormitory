'use client';

import useAuth from "@/app/services/useAuth";
import NavBar from "../NavBar";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";

export default function Page() {
    const auth = useAuth();
    const router = useRouter();

    function logout() {
        auth.logout();
        router.push(URLs.LogIn);
    }

    return (
        <>
            <button onClick={logout}>
                Log out
            </button>

            <NavBar />
        </>
    )
}