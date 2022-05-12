import React from "react";
import dante from "../assets/images/arandia-dante.jpg";
import herbert from "../assets/images/borja-herbert.jpg";
import pem from "../assets/images/imperial-pem.jpg";
import lonzaga from "../assets/images/unknown-man.jpg";
import jacem from "../assets/images/palmiano-jacem.jpg";
import eva from "../assets/images/ribaya-eva.jpg";
import jesap from "../assets/images/salceda-jesap.jpg";
const boardMemThirdDist = () => {
    return (
        <section className="viceGovernor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Board Member - Third District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={dante} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - ARANDIA, DANTE (PROMDI)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={herbert} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - BORJA, HERBERT (NP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={pem} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>3 - IMPERIAL, PEM (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={lonzaga} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - LONZAGA, DADDY GA (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={jacem} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>5 - PALMIANO, JACEM (NUP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={eva} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>6 - RIBAYA, EVA JOSEPHINE (NP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={jesap} alt="Candidate" className="img-fluid colored"/>
                                <p className="mt-2"><span></span>7 - SALCEDA, JESAP (NUP)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default boardMemThirdDist;