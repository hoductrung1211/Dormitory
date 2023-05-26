'use client';
import Form, { Button, Input } from "../Form";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";
import ImageGroup from "../ImageGroup";
import useAuth from "@/app/services/useAuth"; 
import useLoadingAnimation from "@/app/components/LoadingContext";

export default function Page() { 
    const router = useRouter();
    const [showLoading, hideLoading] = useLoadingAnimation();
    const auth = useAuth();
    const [credentials, setCredentials] = useState({
        email: 'eve.holt@reqres.in',
        password: '',
    });
    const [errors, setErrors] = useState<{email: false | string, password: false | string}>({
        email: false,
        password: false,
    });


    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        let response;
        try { 
            showLoading();
            response = await auth.authenticateSuccessful(credentials.email, credentials.password);
        } finally { 
            hideLoading();
        } 
        if (response?.error) {
            setErrors({
                ...errors,
                password: response.error,
            })
        } else if(response === true) {
            router.push(URLs.StudentHome);
        }
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
                    error={errors.email}
                    value={credentials.email}
                    handleChangeInput={e => setCredentials({...credentials, email: e.target.value})}
                />
                <Input
                    icon="key"
                    label="Password"
                    placeholder="Your password"
                    type="password"
                    error={errors.password}
                    value={credentials.password}
                    handleChangeInput={e => setCredentials({...credentials, password: e.target.value})}
                />
                <Button text="Log in" />
            </Form> 
        </>
    )
}