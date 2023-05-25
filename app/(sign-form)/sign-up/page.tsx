'use client';

import Form, { Button, Input } from "../Form";
import { FormEvent, use, useState } from "react";
import { useRouter } from "next/navigation";
import URLs from "@/app/services/urls";
import Spinner from "@/app/components/Spinner";
import useAuth from "@/app/services/useAuth";
import SignUpSuc from "./SignUpSuc";

export default function Page() {
    const router = useRouter();
    const [isSignupSuc, setIsSignupSuc] = useState(false);
    const auth = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [credentials, setCredentials] = useState({
        id: 'eve.holt@reqres.in',
        // id: 'sydney@fife',
        password: '',
        cfmPassword: '',
    });
    const [errors, setErrors] = useState<{[key: string]: false | string}>({
        id: false,
        password: false,
        cfmPassword: false,
    });
 

    async function handleSignup(e: FormEvent) {
        e.preventDefault();
        let response;
        try {
            setIsLoading(true);
            response = await auth.registerSuccessful( 
                credentials.id,
                credentials.password,
             );

        } finally {
            setIsLoading(false);
        } 
        if (response?.error) {
            setErrors({
                ...errors,
                cfmPassword: response.error,
            })
        } else if(response === true) {
            setIsSignupSuc(true);
        }
    }

    return ( 
        <>
            {
                isSignupSuc ?
                <SignUpSuc /> :
                <Form
                    src="/sign-up/ID.svg"
                    title="Sign up"
                    handleSubmitForm={handleSignup}
                >
                    <Input
                        icon="user"
                        label="Identifier"
                        placeholder="N19DCCN001"
                        error={errors.id}
                        value={credentials.id}
                        handleChangeInput={e => setCredentials({...credentials, id: e.target.value})}
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
                    <Input
                        icon="key"
                        label="Password again"
                        placeholder="Your password"
                        type="password"
                        error={errors.cfmPassword}
                        value={credentials.cfmPassword}
                        handleChangeInput={e => setCredentials({...credentials, cfmPassword: e.target.value})}
                    />
                    <Button text="Log in" />
                </Form>
            }
            {isLoading && <Spinner />}
        </>
    )
}