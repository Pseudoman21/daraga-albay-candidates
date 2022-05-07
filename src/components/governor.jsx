import React from "react";
import bichara from "../assets/images/bichara.png";
import rodel from "../assets/images/rodel-luna.jpg";
import mar from "../assets/images/unknown-man.jpg";
import rosal from "../assets/images/rosal-noel.jpg";
const governor = () => {
    return (
        <section className="governor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Governor</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={bichara} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - BICHARA, AL FRANCIS (NP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={rodel} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - LUNA, RODEL (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={mar} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>3 - MAR, BACUIL (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={rosal} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - ROSAL, NOEL (KANP)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default governor;