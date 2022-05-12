import React from "react";
import bruce from "../assets/images/nards-bruce.jpg";
import edcel from "../assets/images/lagman-edcel.jpg";
import rebecca from "../assets/images/quijano-rebecca.jpg";
import villar from "../assets/images/unknown-woman.jpg";
const congFirstDist = () => {
    return (
        <section className="viceGovernor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Congressman - First District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={bruce} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - BRUCE, NARDS (PGRP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={edcel} alt="Candidate" className="img-fluid colored"/>
                                <p className="mt-2"><span></span>2 - LAGMAN, EDCEL (LP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={rebecca} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>3 - QUIJANO, REBECCA (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={villar} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - VILLAR, ADELA PLESHETTE (IND)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default congFirstDist;