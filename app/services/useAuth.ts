import axios, {  AxiosError, isAxiosError } from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = 'http://localhost:8080/';

const enum actionURL {
    authenticateUser = '/api/v1/auth', // log in
    createUser = '/api/v1/users', // sign up
    getUser = '/api/v1/users', // redirect
    patchUser = '/api/v1/users', // 
}

export default function useAuth() {
    async function authenticate(credentials: {email: string, password: string}) {
        try {
            const response = await axios.post(actionURL.authenticateUser, 
                JSON.stringify(credentials)    
            );
            const data = response.data;
            console.log(response);

        } catch (error) {
            if (isAxiosError(error)) {
                console.log(error);
            }
        }
    }
    async function authenticateSuccessful(email: string, password: string) {
        try {
            const response = await axios.post("login", {
                email,
                password,
            }, {baseURL: 'https://reqres.in/api/'});
            const {token} = response.data;
            
            localStorage.setItem("token", token);
            return true;

        } catch (error) {
            if (isAxiosError(error)) {
                return error.response?.data;
            }
        } 
    }
    async function logout() {
        localStorage.removeItem("token");
    }
    async function registerSuccessful(email: string, password: string) {
        try {
            const response = await axios.post("register", {
                email,
                password,
            }, {baseURL: 'https://reqres.in/api/'});
            const {token} = response.data;
            
            localStorage.setItem("token", token);
            return true;

        } catch (error) {
            if (isAxiosError(error)) {
                return error.response?.data;
            }
        } 
    }
    return ({
        authenticate,
        authenticateSuccessful,
        registerSuccessful,
        logout,
    })
}