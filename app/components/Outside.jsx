import Link from 'next/link';
import "../globals.css";
import Image from 'next/image';
export default function Outside() {
    return(
        <>
            <section className="outside">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className='outBox'>
                                <h2>Are You From <strong><em>Outside Delhi or<br></br>Outside India</em>?</strong></h2>
                                <p className="lead">Do you want Airport Pickup, overnight stay or visa and ticketing assistance, etc? Do you know the benefits Divine has for you? Read ahead</p>
                                <div className="facBox">
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; Airport pick-up and drop ( 10.00 AM – 7.00 PM )</p>
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; Guest house stay ( in facility at nominal costs) with order in facility</p>
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; Safe and Hygienic</p>
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; Higher Success</p>
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; Professionals Treating you</p>
                                    <p><i className="fa fa-check"></i>&nbsp;&nbsp; 1 Year Follow-up Complimentary</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}