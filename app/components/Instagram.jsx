import Link from 'next/link';
import "../globals.css";
import Image from 'next/image';
export default function Instagram() {
    return(
        <>
            <section className="instagram">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>Follow Dr. Amit Gupta’s Journey</h2>
                            <p>Dr. Amit Gupta, Normal humans Plastic surgeon who all are celebrities 25+ yrs | 18,000+ procedures Safe.Ethical.Honest Guidance Real Trust Results</p>
                        </div>
                         <div className="col-md-4">
                            <img src="images/mobile.png" className="img-fluid"/>
                        </div>
                            
                    </div>
                </div>
            </section>
        </>
    );
}