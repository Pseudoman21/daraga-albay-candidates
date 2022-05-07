import React from "react";
import arao from "../assets/images/doming-arao.jpg";
import deleoz from "../assets/images/deleoz-opinyon.jpg";
import gil from "../assets/images/goyena-gil.jpg";
import danilo from "../assets/images/unknown-man.jpg";
import joey from "../assets/images/salceda-joey.jpg";
const congSecDist = () => {
    return (
        <section className="congSecDist mt-5">
            <div className="container">
                <div className="row">
                    <h3>Congressman - Second District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={arao} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - ARAO, DOMING (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={deleoz} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - DE LEOZ, OPINYON BICOL (PLM)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={gil} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>3 - GOYENA, GIL (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={danilo} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - MARAVILLAS, DANILO (KTPNAN)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={joey} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>5 - SALCEDA, JOEY (PDPLBN)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default congSecDist;