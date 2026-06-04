'use client';
import Link from 'next/link';
import "../globals.css";

export default function Reviews() {
    return(
        <>
            <section className="reviews pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <h2 className='text-center'>Testimonials of Plastic and Cosmetic Surgery - <strong>Happy Clients</strong></h2>
                        </div>
                        <div className="col-md-6">
                            <div className="revBox">
                                <p>Came over from Australia, to get the breasts that I always wanted. I’m so thankful for the expertise of Amit and the helpful team. I can’t be more happy with my new breast, and how easy and comfortable the clinic made it all feel. I recommend Divine Aesthetics Surgery to 100% I also had some fillers and Botox done. It was all done to perfection! I’m so happy with my visit to India and to the clinic. Forever thankful🙏</p>
                                <h4>Ida Karlsson</h4>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className='m-auto text-center pt-3'>
                                <Link href="/" className='btn btn-primary text-white'>More Results</Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='vid'>
                                <iframe  loading="lazy" width="100%" height="350" title="Transformative Breast Reduction Surgery with Lift in India: Hear from an Australian Patient's Review" src="https://www.youtube.com/embed/Vidjf-o5F3A?list=PLtrJgcRamie-IXs7BFRtfLa76yP3sRFbt" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen data-gtm-yt-inspected-15="true" id="_dytid_7649"></iframe>
                                <div className='m-auto text-center pt-3'>
                                    <Link href="/" className='btn btn-primary text-white'>More Videos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}