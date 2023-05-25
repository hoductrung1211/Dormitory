import { FormEvent, useEffect, useState } from "react"; 
import { useRouter } from "next/navigation";
import useAuthentication from "../services/useAuthentication";

export default function RegisterForm( )  {
    const router = useRouter();
    const authen = useAuthentication();

    const [credenttials, setCredentials] = useState({
        email: '',
        password: '',
    });

  
    if (authen.authenticated)
        router.push('/home');
 

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Handle successful login
        await authen.login(credenttials.email, credenttials.password);

        if (authen.authenticated)
        // Redirect the user or update the application state
            router.push('/home');
    }
 

    const labelClassName = 'flex flex-col'
    const inputClassName = 'py-1 px-2 border-2 outline-none rounded-md';

    return (
        <form 
            className="w-80 flex flex-col gap-6 py-4 px-5 border-2 rounded-lg"
            onSubmit={handleSubmit}
        >
            <h3 className="text-center text-xl font-bold">Login</h3>
            <label className={labelClassName}>
                Email:
                <input
                    className={inputClassName}
                    value={credenttials.email}
                    onChange={e => setCredentials({...credenttials, email: e.target.value})}
                />
            </label>
            <label className={labelClassName}>
                Password:
                <input
                    className={inputClassName}
                    type="password"
                    value={credenttials.password}
                    onChange={e => setCredentials({...credenttials, password: e.target.value})}
                />
            </label>
            <button className="h-9 bg-blue-400 text-white rounded-md">
                Log in
            </button>
        </form>
    )
} 