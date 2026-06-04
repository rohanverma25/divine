import Image from 'next/image';
export default function Slider() {
    return(
        <>
        <section className="slider">
            <Image
                src="/images/Do-you-know-why-divine-is-trusted.webp"
                alt="Banner"
                width={1520}
                height={507}
                priority
            />
        </section>
        </>
    )
}