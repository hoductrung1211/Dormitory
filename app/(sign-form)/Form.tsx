import { ChangeEvent, FormEvent, FormEventHandler } from "react"

export default function Form({
    children,
    handleSubmitForm
}: {
    children: React.ReactNode,
    handleSubmitForm: (e: FormEvent<HTMLFormElement>) => void
}) {
    return (
        <form 
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmitForm}
        >
            {children} 
        </form>
    )
}

export function Input({
    value,
    handleChangeInput
}: {
    value: string,
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void, 
}) {
    return (
        <input 
            className=""
            value={value}
            onChange={handleChangeInput} 
        />
    )
}

export function Button({
    text
}: {
    text: string,
}) {
    return (
        <button className="">
            {text}
        </button>
    )
}