import Timer from "react-compound-timer";
import React from "react";

import {
    useHistory,
} from "react-router-dom";

function SummarizeText({data}) {

    let {src, initialTime} = data;
    let text = "";

    let history = useHistory();
    let current = parseInt(localStorage.getItem("current"));

    return (
        <div>
            <div className="q-box">
                <div className="q-inner">
                    <div className="card summarize-card">
                        <div className="card-header card-header-rose d-inline-flex position-relative">
                            <div className="card-icon">
                                <i className="material-icons">
                                    notes
                                </i>
                            </div>
                            <h4 className="card-title">Summarize Written Text <span className="position-absolute"><Timer
                                //timeToUpdate={10000}
                                checkpoints={[
                                    {
                                        time: 0,
                                        callback: () => {
                                            //not working
                                        }
                                    }
                                ]}
                                formatValue={(value) => {
                                    let tmp = parseInt(value);
                                    let mod = tmp % 10;
                                    if(tmp <= 0) {// for stop
                                        setTimeout(function () {
                                            localStorage.setItem("response_4",text);
                                            history.replace('/q' + (current + 1));
                                        },1000);
                                        return;
                                    }
                                    if(tmp === 0) return 0;
                                    if(mod > 0){
                                        return (tmp - mod + 10) + " seconds";
                                    }
                                    return tmp + " seconds";
                                }}
                                onStop={() => {
                                    // not working
                                    console.log("on stop");
                                }}
                                initialTime={initialTime}
                                direction="backward">
                            <Timer.Seconds/>
                        </Timer></span> </h4>
                        </div>
                        <div className="card-body">
                            <div className="q-status">
                                <div className="summarize-src">
                                    <p>
                                        {src}
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="q-main">
                        <div className="response">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Your Summary</label>
                                <textarea className="form-control" onChange={(event => {
                                    event.persist();
                                    text = event.target.value;
                                    console.log(event.target.value);
                                })} id="exampleFormControlTextarea1" rows="3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q" onClick={(event => {
                    localStorage.setItem("q_4",text);
                    console.log("clicked")
                    history.replace('/q' + (current + 1));
                })}>Next <i
                    className="material-icons">
                    keyboard_arrow_right
                </i></button>
            </div>
        </div>
    )
}

export default SummarizeText
