import React from "react";
import glenda from "../assets/images/bongao-glenda.jpg";
import borjal from "../assets/images/unknown-man.jpg";
import rey from "../assets/images/bragais-rey.jpg";
import ziga from "../assets/images/ziga-victor.jpg";

const boardMemFirstDist = () => {
    return (
        <section className="viceGovernor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Board Member - First District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={glenda} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - BONGAO, ATE GLENDA (LP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={borjal} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - BORJAL, DENNIESIANO (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={rey} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>3 - BRAGAIS, REY (LP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={ziga} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - ZIGA, VICTOR JR. (LAKAS)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default boardMemFirstDist;