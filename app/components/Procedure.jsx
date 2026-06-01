'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

export default function Procedure() {
    return(
        <>
            <section className="procedure">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h5 className='text-center'>MAMC trained Plastic Surgeon in Delhi</h5>
                            <h2 className='text-center'>Dr. Amit Gupta With <strong>19+ Years of Experience</strong></h2>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox active">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/breast.png" className='img-fluid' />
                                <h3>Breast</h3>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/hair-transplant.png" className='img-fluid' />
                                <h3>Hair Transplant</h3>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/skin.png" className='img-fluid' />
                                <h3>Skin</h3>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/body-countouring.png" className='img-fluid' />
                                <h3>Body Contouring</h3>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/male-treatments.png" className='img-fluid' />
                                <h3>Male Treatments</h3>
                            </div>
                        </div>
                        <div className='col-md-2'>
                            <div className="procedureBox">
                                <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/female-rejuvenation.png" className='img-fluid' />
                                <h3>Female Rejuvenation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="procedures mt-5">
                        <div className='row'>
                            <div className="col-md-4">
                                <div className="procedureList">
                                    <div className='procedure1'>
                                        <h3>Breast Augmentation</h3>
                                        <h5>2000+ Surgeries</h5>
                                        <Link href="#">Know More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="procedureList">
                                    <div className='procedure2'>
                                        <h3>Breast Reduction</h3>
                                        <h5>1000+ Surgeries</h5>
                                        <Link href="#">Know More</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="procedureList">
                                    <div className='procedure3'>
                                        <h3>Breast Lift</h3>
                                        <h5>750+ Surgeries</h5>
                                        <Link href="#">Know More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}