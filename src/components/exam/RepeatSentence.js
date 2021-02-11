import Timer from "react-compound-timer";
import Recorder from "../audio/Recorder";
import React, {useState} from 'react';
import Listener from "../audio/Listener";
import {stopRecoder} from "../../common/Recorder";

import {
    useHistory,
} from "react-router-dom";

function RepeatSentence({data}) {

    let {initialTime, src, recordTime,question} = data;
    let history = useHistory();

    let current = parseInt(localStorage.getItem("current"));

    const [step, setStep] = useState(
        0
    );

    return (
        <div>
            <div className="q-box">
                <div className="q-inner">
                    <div className="card">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                {(step === 0 || step === 1) && <i className="material-icons">volume_up</i>}
                                {step === 2 && <i className="material-icons">keyboard_voice</i>}
                            </div>
                            {(step === 0 || step === 1) && <h4 className="card-title">Listen</h4>}
                            {step === 2 && <h4 className="card-title">Recording</h4>}
                        </div>
                        <div className="card-body">
                            {step === 0 && <div className="q-status">Listening will begin in <Timer
                                checkpoints={[
                                    {
                                        time: 0,
                                        callback: () => {
                                            setTimeout(function () {
                                                setStep(1);
                                            },2000)
                                        },
                                    }
                                ]}
                                initialTime={initialTime}
                                direction="backward">
                                <Timer.Seconds/>
                            </Timer> seconds

                            </div>}

                            {step === 1 && <Listener src={src} onComplete={() => {
                                setStep(2);
                            }} />}

                            {step === 2 && <Recorder
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
                        <p>
                            {question}
                        </p>
                    </div>
                </div>
            </div>
            <div className="q-next">
                <button
                    className="btn btn-primary btn-round next-q"
                    onClick={(event => {
                        stopRecoder();
                        history.replace('/q' + (current + 1));
                    })}
                    disabled={step !== 2}>Next
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
            </div>
        </div>
    )
}

export default RepeatSentence
