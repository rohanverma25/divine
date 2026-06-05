'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

export default function About() {
    return(
        <>
            <section className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h2 className='text-center'>Do You Want To Know Why You Can <strong>Trust the Divine?</strong></h2>
                            <p className='text-center lead'>Divine cosmetic surgery, under the leadership of Dr. Amit Gupta Board Certified Plastic Surgeon and Mrs. Deepti Gupta, stands for trust, honesty, sincerity, satisfaction, and approachability not only in India but worldwide in more than 27 countries</p>
                        </div>
                        <div className="col-md-5">
                            <div className='aboutImg text-center'>
                                <Image
                                    src="/images/amit.webp"
                                    alt="Banner"
                                    width={400}
                                    height={400}
                                    className="m-auto"
                                />
                                <h3>Dr. Amit Gupta</h3>
                                <h6>Super Specialist Plastic & Aesthetic Surgeon</h6>
                                <div className="aboutAmit">
                                    <p>Dr. Amit Gupta is a prominent plastic surgeon in India and abroad, specializing in cosmetic surgery, hair transplants, gynecomastia, breast augmentation, liposuction, mommy makeovers, facial rejuvenation, and many more… He graduated from Maulana Azad Medical College and has received fellowships in aesthetic surgery in Belgium and Brazil. Dr. Amit Gupta is dedicated to excellence and constantly seeks to learn and teach new techniques.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className='col-md-6'>
                            <div className='sec-2'>
                                <p>Divine Aesthetics is one of India’s leading plastic surgery hospital with over 19+ years of experience in advanced cosmetic and aesthetic procedures. Divine Aesthetics is committed to delivering world-class aesthetic care with innovation, expertise, and personalized treatment.</p>
                                <div className="achievement">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-6">
                                            <div className='row align-items-center'>
                                                <div className="col-md-2 col-3">
                                                    <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/award-icon.png" className="img-fluid"/>
                                                </div>
                                                <div className="col-md-8 col-9">
                                                    <h4>21000+ Plastic Surgeries</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-6">
                                            <div className='row align-items-center'>
                                                <div className="col-md-2 col-3">
                                                    <img src="https://www.divinecosmeticsurgery.com/wp-content/uploads/2020/11/award-icon.png" className="img-fluid"/>
                                                </div>
                                                <div className="col-md-8 col-9">
                                                    <h4>International Speaker & Trainer</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='list'>
                                    <ul>
                                        <li><i className="fa fa-check"></i>Dr. Amit Gupta is amongst India’s most sought-after plastic surgeon</li>
                                        <li><i className="fa fa-check"></i>Invited Speaker in many international conferences</li>
                                        <li><i className="fa fa-check"></i>Researcher – many International Research Papers</li>
                                        <li><i className="fa fa-check"></i>A renowned expert in <strong>Hair transplant, Gynecomastia, 4D body contouring, and Breast Implant procedures</strong></li>
                                    </ul>
                                </div>
                                <div className='blockquote'>
                                    <h4>"</h4>
                                    <h5>I’m passionate about delivering real life-enhancing results for our clients</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center mt-2">
                            <Link href="https://my.crisalix.com/signup/amit-gupta-2" className="btn btn-primary">Book 4D Consultation</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}