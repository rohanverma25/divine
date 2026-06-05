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
                        <div className="col-md-1"></div>
                        <div className="col-md-2 col-6 mb-2">
                            <Link href="/" className='btn btn-primary w-100 text-white'>Show All</Link>
                        </div>
                        <div className="col-md-2 col-6 mb-2">
                            <Link href="/" className='btn btn-primary w-100 text-white'>Breast Implant</Link>
                        </div>
                        <div className="col-md-2 col-6 mb-2">
                            <Link href="/" className='btn btn-primary w-100 text-white'>Cosmetic Surgery</Link>
                        </div>
                        <div className="col-md-2 col-6 mb-2">
                            <Link href="/" className='btn btn-primary w-100 text-white  '>Hair Transplant</Link>
                        </div>
                        <div className="col-md-2 col-6 col-12">
                            <Link href="/" className='btn btn-primary w-100 text-white'>Mommy Makeover</Link>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4">
                            <div className="slideBox mt-4">
                                <Image
                                    src="/images/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.webp"
                                    alt={`Slide 1`}
                                    width={375}
                                    height={215}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-4">
                                <div className="slideBox">
                                <Image
                                    src="/images/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.webp"
                                    alt={`Slide 1`}
                                    width={375}
                                    height={215}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                            </div>
                            <div className='col-md-4 mt-4'>
                                <div className="slideBox">
                                <Image
                                    src="/images/Worried-About-No-Donor-Area-Opt-For-Synthetic-Hair-Transplant.webp"
                                    alt={`Slide 1`}
                                    width={375}
                                    height={215}
                                    className="w-full object-cover"
                                />
                                <h3>Worried About No Donor Area? Opt For Synthetic Hair Transplant</h3>
                                <h5><i className="fa fa-calendar"></i>&nbsp;May 9, 2019</h5>
                                <p>Synthetic hair transplant also known as artificial hair implantation is performed due to the lack of donor area or no...</p>
                                <Link href="" className="">Read More</Link>
                                </div>
                        </div>
                        <div className="col-md-12 text-center mt-4">
                            <Link href="/" className="btn btn-primary text-white">View All Blogs</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}