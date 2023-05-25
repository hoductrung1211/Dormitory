'use client';
import Form, { Button, Input } from "../Form";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";
import ImageGroup from "../ImageGroup";

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
            <ImageGroup
                srcs={["/login/2.jpg", "/login/1.jpg"]}
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
                <Button text="Log in" />
            </Form>
        </>
    )
}