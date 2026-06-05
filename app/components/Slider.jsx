import Image from 'next/image';
export default function Slider() {
    return(
        <>
        <section className="slider">
            <img className="desktop" fetchPriority='high' alt="Banner" width="1520" height="507" decoding="async" data-nimg="1" srcSet="/images/Do-you-know-why-divine-is-trusted.webp 1x, /images/Do-you-know-why-divine-is-trusted.webp 2x" src="/images/Do-you-know-why-divine-is-trusted.webp"></img>
            {/* <img className="mobile" fetchPriority='high' alt="Banner" width="375" height="125" decoding="async" data-nimg="1" srcSet="/images/Do-you-know-why-divine-is-trusted.webp 1x, /images/Do-you-know-why-divine-is-trusted.webp 2x" src="/images/Do-you-know-why-divine-is-trusted.webp"></img> */}

        </section>
        </>
    )
}