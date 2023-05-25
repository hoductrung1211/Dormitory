import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/';

const enum actionURL {
    authenticateUser = '/api/v1/auth', // log in
    createUser = '/api/v1/users', // sign up
    getUser = '/api/v1/users', // redirect
    patchUser = '/api/v1/users', // 
}

export default function useAuthentication() {
    const [authenticated, setAuthenticated] = useState(false);
    console.log(authenticated);
    // indicates whether the user is authenticated based on the token.
    const [loading, setLoading] = useState(true);
    // is a flag to indicate whether the authentication check is in progress(true) or completed(false).

    const signup = async (name: string, email:string, password: string) => {
        try {
            // Send sign up request to backend
            const response = await axios.post(actionURL.createUser, {
                name,
                email,
                password,
            });

            const {accessToken} = response.data;

            localStorage.setItem('accessToken', accessToken);

            setAuthenticated(true);
        } catch (error) {
            console.log('Sign up failed', error);
            throw new Error("Invalid email & password");
        }
    }

    const login = async (email: string, password: string) => {
        try {
            // Send login request to backend
            const response = await axios.post(actionURL.authenticateUser, JSON.stringify({
                email,
                password,
            }));
            // Extract access token from the response
            const {token} = response.data;

            if (token) {
                // Store the access token
                localStorage.setItem('accessToken', token);
                // Set authenticated status
                setAuthenticated(true);
            }
        } catch (error) {
            setAuthenticated(false);
            localStorage.removeItem('accessToken');
            console.log('Login failed', error);
            throw new Error("Invalid email & password");
        }
    }

    const logout = async () => {
        // Clear the access token and set authenticated status to false
        localStorage.removeItem('accessToken');

        setAuthenticated(false);
    }
 
    const watchProfile = async () => {
        const accessToken = localStorage.getItem('accessToken');

        try {
            if (accessToken) {
                const response = await axios.get(actionURL.getUser, {
                    headers: {
                        Authorization: accessToken
                    }
                });

                return response;
            } else {
                throw new Error("Access token is gone!");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken)
            setAuthenticated(true);
    }, [])

    return {
        authenticated,
        loading,
        signup,
        login,
        logout,
        watchProfile
    }
}