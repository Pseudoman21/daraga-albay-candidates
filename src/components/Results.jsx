import React from "react";

const Results = () => {
        const iframeSource = `<iframe loading="lazy" class="pres" src="https://ph.rappler.com/elections/2022/races/embed/results/president" width="100%" height="1520px" frameborder="0"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" className="mt-2 mce_SELRES_start"></span></iframe>`;
        const iframeSourceVp = `<iframe loading="lazy" class="vice-pres" src="https://ph.rappler.com/elections/2022/races/embed/results/vice-president" width="100%" frameborder="0"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" className="mt-2 mce_SELRES_start"></span></iframe>`;
        const iframeSourceSen = `<iframe loading="lazy" class="senate" src="https://ph.rappler.com/elections/2022/races/embed/results/senator" width="100%" frameborder="0"><span data-mce-type="bookmark" style="display: inline-block; width: 0px; overflow: hidden; line-height: 0;" className="mt-2 mce_SELRES_start"></span></iframe>`;

        return (
            <>
                <h1 className="header">
                    2022 ELECTIONS RESULT
                </h1>
                <div className="px-5">
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div dangerouslySetInnerHTML={{__html: iframeSource}}></div>
                        </div>
                        <div className='col-lg-6'>
                            <div dangerouslySetInnerHTML={{__html: iframeSourceVp}}></div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div dangerouslySetInnerHTML={{__html: iframeSourceSen}}></div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default Results;