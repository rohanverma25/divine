'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

export default function Blogs() {
    return(
        <>
            <section className="blogs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center'>Learn With Our <strong>Experts In Plastic Surgery</strong></h2>
                            <p className='text-center'>Stay informed with expert insights on aesthetic procedures, recovery tips, and industry innovations.</p>
                        </div>
                        <div className="col-md-9">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={20}
                                // navigation
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 5000 }}
                                loop={true}
                                breakpoints={{
                                    320: {
                                    slidesPerView: 1,
                                    },
                                    768: {
                                    slidesPerView: 1,
                                    },
                                    1024: {
                                    slidesPerView: 2,
                                    },
                                }}
                                >
                                <SwiperSlide key="1">
                                    <div className="slideBox">
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2019/05/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.jpg"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="2">
                                <div className="slideBox">
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2019/05/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.jpg"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="4">
                                <div className="slideBox">
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2019/05/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.jpg"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                                </SwiperSlide>
                                <SwiperSlide key="5">
                                <div className="slideBox">
                                <Image
                                    src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2019/05/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.jpg"
                                    alt={`Slide 1`}
                                    width={1920}
                                    height={800}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-md-3">
                            <div className="blog-card">
                                <img
                                    src="https://img.magnific.com/free-photo/woman-preparing-cosmetic-surgery_23-2150879680.jpg?t=st=1780152371~exp=1780155971~hmac=e17ac5d83e7bc6087fd6d1a49324bde0d7211e7a4ca7e7ea7a5b975b4b3aa752&w=1480"
                                    className="img-fluid"
                                    alt=""
                                />

                                <div className="overlay">
                                    <Link href="">View All Blogs</Link>
                                </div>
                            </div>

                            <div className="text-center p-2 viewMore">
                                <Link href="" className="d-block">
                                    View All Blogs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}