import Timer from "react-compound-timer";
import Recorder from "../audio/Recorder";
import React, {useState} from 'react';
import {stopRecoder} from "../../common/Recorder";
import { useHistory } from "react-router-dom";

function DescribeImage({data}) {

    let {initialTime, recordTime, src} = data;
    let history = useHistory();

    const [step, setStep] = useState(
        0
    );


    if(localStorage.getItem("stepped") === "1"){
        setStep(0);
        localStorage.setItem("stepped","0");
    }

    let current = parseInt(localStorage.getItem("current"));


    return (
        <div>
            <div className="q-box">
                <div className="q-inner q-describe">
                    <div className="card">
                        <div className="card-header card-header-rose d-flex justify-content-center">

                            {step === 0 && <div>
                                <div className="card-icon">
                                    <i className="material-icons">visibility</i>
                                </div>
                                <h4 className="card-title">Look at the image</h4>
                            </div>}

                            {step === 1 && <div>
                                <div className="card-icon">
                                    <i className="material-icons">keyboard_voice</i>
                                </div>
                                <h4 className="card-title">Recording</h4>
                            </div>}

                        </div>
                        <div className="card-body">
                            {step === 0 && <div className="q-status">Recording will begin in <Timer
                                checkpoints={[
                                    {
                                        time: 0,
                                        callback: () => setStep(1),
                                    }
                                ]}
                                initialTime={initialTime}
                                direction="backward">
                                <Timer.Seconds/>
                            </Timer> seconds

                            </div>}

                            {step === 1 && <Recorder
                                duration={recordTime}
                                onComplete={() => {
                                    //5 saniyelik timer 4 saniye kayıt yapıyordu. 850 ms timeout ile tam 5 saniye kayıt yapmasını sağladık.
                                    setTimeout(function () {
                                        stopRecoder();
                                        history.replace('/q' + (current + 1));
                                    },850)
                                }}
                            />}



                        </div>
                    </div>
                    <div className="q-main">
                        <div className="q-image">
                            <img src={src} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q"
                        onClick={(event) => {
                            stopRecoder();
                            history.replace('/q' + (current + 1));
                        }}
                        disabled={step !== 1}>Next <i
                    className="material-icons">
                    keyboard_arrow_right
                </i></button>
            </div>
        </div>
    )
}

export default DescribeImage
