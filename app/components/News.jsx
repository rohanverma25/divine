'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

export default function News() {
    return(
        <>
            <section className="news">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h2 className='text-center'>In The <strong>News</strong></h2>
                        </div>
                        <div className="col-md-12">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={100}
                                // navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 1000 }}
                                loop={true}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1,
                                    },
                                    768: {
                                    slidesPerView: 2,
                                    },
                                    1024: {
                                    slidesPerView: 5,
                                    },
                                }}
                                >
                                <SwiperSlide key="1">
                                    <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/01/n4.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="2">
                                <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/01/n5.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="3">
                                <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/01/n3.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="4">
                                <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/03/India-today.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="5">
                                <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/01/n2.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="6">
                                <div>
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2024/01/n6.png"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-12 text-center mt-3">
                            <Link href="" className='btn btn-primary'>Know More</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}