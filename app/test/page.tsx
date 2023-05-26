'use client';

import { useState } from "react";
import useLoadingAnimation from "../components/LoadingContext";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);
    const [show, hide] = useLoadingAnimation();

    function handleClick() {
        if (isLoading) {
            setIsLoading(false);
            hide();
        } else {
            setIsLoading(true);
            show();
        }
    }

    return (
        <button onClick={handleClick}>{isLoading ? 'Hide' : 'Show'}</button>
    )
} 