import Link from 'next/link';
import "../globals.css";
import Image from 'next/image';
export default function Instagram() {
    return(
        <>
            <section className="instagram">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-1 col-3">
                            <div className="instaBox">
                                <Image
                                    src="/images/plasticsurgeonamitgupta.webp"
                                    alt={`Slide 2`}
                                    width={306}
                                    height={400}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-md-11 col-9">
                            <h4>plasticsurgeonamitgupta</h4>
                            <p>Dr. Amit Gupta, Normal humans Plastic surgeon who all are celebrities 25+ yrs | 18,000+ procedures Safe.Ethical.Honest Guidance Real Trust Results</p>
                        </div>
                        <div className="col-md-3 col-6">
                            <Image
                                src="/images/713923838_4225728317688306_5841696885656891089_nlow.webp"
                                alt={`Slide 2`}
                                width={306}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <Image
                                src="/images/713923838_4225728317688306_5841696885656891089_nlow.webp"
                                alt={`Slide 2`}
                                width={306}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <Image
                                src="/images/713923838_4225728317688306_5841696885656891089_nlow.webp"
                                alt={`Slide 2`}
                                width={306}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <Image
                                src="/images/713923838_4225728317688306_5841696885656891089_nlow.webp"
                                alt={`Slide 2`}
                                width={306}
                                height={400}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}