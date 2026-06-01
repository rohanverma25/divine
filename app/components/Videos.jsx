'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

export default function Videos() {
    return(
        <>
            <section className="videos">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <h2 className='text-center'>Latest <strong>Videos</strong></h2>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-card">
                                <img
                                    src="https://img.magnific.com/free-photo/doctor-examining-female-patients-face-cosmetic-treatment_107420-74121.jpg"
                                    className="img-fluid"
                                    alt=""
                                />

                                <div className="overlay">
                                    <Link href="">View More Videos</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                // navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 7000 }}
                                loop={true}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1,
                                    },
                                    768: {
                                    slidesPerView: 1,
                                    },
                                    1024: {
                                    slidesPerView: 1,
                                    },
                                }}
                                >
                                <SwiperSlide key="1">
                                    <iframe title="Transformative Breast Reduction Surgery with Lift in India: Hear from an Australian Patient's Review" width="100%" height="420" src="https://www.youtube.com/embed/Vidjf-o5F3A?list=PLtrJgcRamie-IXs7BFRtfLa76yP3sRFbt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-gtm-yt-inspected-15="true" id="_dytid_7649"></iframe>
                                </SwiperSlide>
                                <SwiperSlide key="2">
                                    <iframe title="Transformative Breast Reduction Surgery with Lift in India: Hear from an Australian Patient's Review" width="100%" height="420" src="https://www.youtube.com/embed/Vidjf-o5F3A?list=PLtrJgcRamie-IXs7BFRtfLa76yP3sRFbt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-gtm-yt-inspected-15="true" id="_dytid_7649"></iframe>
                                </SwiperSlide>
                                <SwiperSlide key="4">
                                    <iframe title="Transformative Breast Reduction Surgery with Lift in India: Hear from an Australian Patient's Review" width="100%" height="420" src="https://www.youtube.com/embed/Vidjf-o5F3A?list=PLtrJgcRamie-IXs7BFRtfLa76yP3sRFbt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" data-gtm-yt-inspected-15="true" id="_dytid_7649"></iframe>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
}