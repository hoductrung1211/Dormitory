'use client';

import { createContext, useContext, useState } from "react"; 
import Spinner from "./Spinner";


const SetLoadingContext = createContext<((isLoading: boolean) => void) | null>(null);

export default function useLoadingAnimation() {
    const setIsShow =  useContext(SetLoadingContext);

    function show() {
        setIsShow?.(true);
    }

    function hide() {
        setIsShow?.(false);
    }

    return ([
        show,
        hide,
    ])
}

export function LoadingProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [isShow, setIsShow] = useState(false);

    return (
        <SetLoadingContext.Provider value={setIsShow}>
            {children}
            {isShow && <Spinner />}
        </SetLoadingContext.Provider>
    )
}