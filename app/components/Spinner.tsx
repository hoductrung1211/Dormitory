import Icon from "./Icon";

export default function Spinner() {
    return (
        // <section className="fixed inset-0 text-white bg-black bg-opacity-80 grid place-items-center z-30">
            <div className="animate-spin fixed bottom-10 right-10">
                <Icon name="fan" size="2xl" />
            </div>
        // </section>
    )
}