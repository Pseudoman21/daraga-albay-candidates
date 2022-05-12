import React from "react";
import melissa from "../assets/images/avadeza-melissa.jpg";
import alegre from "../assets/images/alegre-jun.jpg";
import vince from "../assets/images/baltazar-vince.jpg";
import fernand from "../assets/images/imperial-fernand.jpg";
import neil from "../assets/images/montallana-neil.jpg";
import rolly from "../assets/images/rosal-rolly.jpg";
const boardMemSecDist = () => {
    return (
        <section className="viceGovernor mt-5">
            <div className="container">
                <div className="row">
                    <h3>Board Member - Second District</h3>
                    <div className="col-lg-12">
                        <div className="row justify-content-center p-4">
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={melissa} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>1 - ABADEZA, MELISSA (NP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={alegre} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>2 - ALEGRE, JUNZAGITSIT (IND)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={vince} alt="Candidate" className="img-fluid colored"/>
                                <p className="mt-2"><span></span>3 - BALTAZAR, VINCE (PDPLBN)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={fernand} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>4 - IMPERIAL, FERNAND (NP)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={neil} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>5 - MONTALLANA, NEIL (PDPLBN)</p>
                            </div>
                            <div className="col-lg-2 col-sm-4 col-md-4 col-6 mt-4">
                                <img src={rolly} alt="Candidate" className="img-fluid"/>
                                <p className="mt-2"><span></span>6 - ROSAL, ROLLY (KANP)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default boardMemSecDist;