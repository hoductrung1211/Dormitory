'use client';

import Image from "next/image";
import Form, { Button, Input } from "../Form";
import { useState } from "react";

export default function Page() {
    const [credentials, setCredentials] = useState({
        id: '',
        password: '',
        cfmPassword: '',
    });

    return (
        <>
            <div className="relative w-full">
                <Image
                    className="object-contain"
                    src="/sign-up.jpg"
                    alt="Log in image"
                    fill
                />
            </div>
            <Form>
                <Input
                    value={credentials.id}
                    handleChangeInput={e => setCredentials({...credentials, id: e.target.value})}
                />
                <Input
                    value={credentials.password}
                    handleChangeInput={e => setCredentials({...credentials, password: e.target.value})}
                />
                <Input
                    value={credentials.cfmPassword}
                    handleChangeInput={e => setCredentials({...credentials, cfmPassword: e.target.value})}
                />
                <Button text="Sign in" />
            </Form>
        </>
    )
}