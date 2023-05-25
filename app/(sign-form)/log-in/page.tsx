'use client';

import Image from "next/image";
import Form, { Button, Input } from "../Form";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";

export default function Page() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        id: '',
        password: '',
    });

    function handleLogin(e: FormEvent) {
        e.preventDefault();
        router.push(URLs.StudentHome);
    }

    return (
        <>
            <div className="relative w-full">
                <Image
                    className="object-contain"
                    src="/log-in.jpg"
                    alt="Log in image"
                    fill
                />
            </div>
            <Form
                handleSubmitForm={handleLogin}
            >
                <Input
                    value={credentials.id}
                    handleChangeInput={e => setCredentials({...credentials, id: e.target.value})}
                />
                <Input
                    value={credentials.password}
                    handleChangeInput={e => setCredentials({...credentials, password: e.target.value})}
                />
                <Button text="Log in" />
            </Form>
        </>
    )
}