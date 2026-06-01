import Link from 'next/link';
import "../globals.css";

export default function Info() {
    return(
        <>
            <section className="info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="infoBox">
                                <div className="d-flex g-10 align-items-center">
                                    <div className="icon">
                                        <i className="fa fa-location-pin"></i>
                                    </div>
                                    <div className="head">
                                        <h3>Plastic Surgery Center</h3>
                                    </div>
                                </div>
                                <p>E-566, Greater Kailash Part 2, South Delhi 110048, INDIA</p>
                                <Link href="">See on Map <i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                         <div className="col-md-3">
                            <div className="infoBox">
                            <div className="d-flex g-10 align-items-center">
                                <div className="icon">
                                    <i className="fa fa-location-pin"></i>
                                </div>
                                <div className="head">
                                    <h3>Gurgaon OPD Address</h3>
                                </div>
                            </div>
                            <p>Rapid Metro Station, 592, Golf Course Rd, behind Sector 42, Sector 43, Gurugram, Haryana 122009</p>
                            <Link href="">See on Map <i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="infoBox">
                            <div className="d-flex g-10 align-items-center">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="head">
                                    <h3>Appointments</h3>
                                </div>
                            </div>
                            <p>Our Patient coordinator will assist you to schedule an appointment. Call Now</p>
                            <Link href="">(+91) 98119 94417 <i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="infoBox">
                                <div className="d-flex g-10 align-items-center">
                                    <div className="icon">
                                        <i className="fa fa-clock"></i>
                                    </div>
                                    <div className="head">
                                        <h3>Opening Hours</h3>
                                    </div>
                                </div>
                                <p>MON – SAT	10:00 AM – 08:00 PM</p>
                                <Link href="">Visit Us Now <i className="fa fa-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}