import Link from 'next/link';
import "../globals.css";

export default function Expert() {
    return(
        <>
            <section className="expertTip">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="expertForm">
                                <div className="alert alert-success"><i className="fa fa-star"></i>&nbsp;&nbsp;Talk to an Expert</div>
                                <h2>Get Tips from our <strong>Experts<br></br>Straight</strong> to your inbox!</h2>
                                
                                <form className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Name*" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address*" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="tel" className="form-control" placeholder="Phone*" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="teltext" className="form-control" placeholder="City*" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Procedure Name</option>
                                                <option value="Hair Loss">Hair Loss</option>
                                                <option value="Gynecomastia">Gynecomastia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                           <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}