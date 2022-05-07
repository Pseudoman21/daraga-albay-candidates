import React from "react";
import harold from "../assets/images/imperial-harold.jpg";
import grex from "../assets/images/lagman-grex.jpg";
const viceGovernor = () => {
    return (
        <section className="viceGovernor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Vice Governor</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={harold} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - IMPERIAL, HAROLD (PROMDI)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={grex} alt="Candidate Photo" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - LAGMAN, GREX (AKSYON)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default viceGovernor;