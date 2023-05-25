'use client';

import Form, { Button, Input } from "../Form";
import { FormEvent, useState } from "react";
import ImageGroup from "../ImageGroup";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";

export default function Page() {
    const router = useRouter();
    const [credentials, setCredentials] = useState({
        id: '',
        password: '',
        cfmPassword: '',
    });

    function handleLogin(e: FormEvent) {
        e.preventDefault();
        router.push(URLs.StudentHome);
    }

    return (
        <>
            <ImageGroup
                srcs={["/sign-up/2.jpg", "/sign-up/1.jpg"]}
            />
            <Form
                src="/login/welcome.svg"
                title="Login your account"
                handleSubmitForm={handleLogin}
            >
                <Input
                    icon="user"
                    label="Identifier"
                    placeholder="N19DCCN001"
                    error={false}
                    value={credentials.id}
                    handleChangeInput={e => setCredentials({...credentials, id: e.target.value})}
                />
                <Input
                    icon="key"
                    label="Password"
                    placeholder="Your password"
                    type="password"
                    error={"Wrong password"}
                    value={credentials.password}
                    handleChangeInput={e => setCredentials({...credentials, password: e.target.value})}
                />
                <Input
                    icon="key"
                    label="Password again"
                    placeholder="Your password"
                    type="password"
                    error={"Wrong password again"}
                    value={credentials.cfmPassword}
                    handleChangeInput={e => setCredentials({...credentials, cfmPassword: e.target.value})}
                />
                <Button text="Log in" />
            </Form>
        </>
    )
}