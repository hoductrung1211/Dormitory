import React from "react"
import ImageGroup from "../ImageGroup"

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ImageGroup
                srcs={["/sign-up/2.jpg", "/sign-up/1.jpg"]}
            />
            {children}
        </>
    )
}