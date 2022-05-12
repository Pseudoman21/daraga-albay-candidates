import React from "react";
import fernando from "../assets/images/cabrero-fernando.jpg";
import lim from "../assets/images/lim-reno.jpg";
const congThirdDist = () => {
    return (
        <section className="congThirDist mt-5">
            <div className="container">
                <div className="row">
                    <h3>Congressman - Third District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={fernando} alt="Candidate" className="img-fluid colored"/>
                                <p className="mt-2"><span></span>1 - CABREDO, FERNANDO (NUP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={lim} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - LIM, RENO (IND)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default congThirdDist;