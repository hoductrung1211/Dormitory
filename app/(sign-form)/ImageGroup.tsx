import Image from "next/image";

export default function ImageGroup({
    srcs
}: {
    srcs: [string, string]
}) {
    return (
        <section className="w-2/3 flex">
            {srcs.map(src => (
                <div className="relative w-1/2">
                    <Image
                        className="object-cover"
                        src={src}
                        alt="Log in image"
                        fill
                    /> 
                </div>
            ))} 
        </section>
    )
}