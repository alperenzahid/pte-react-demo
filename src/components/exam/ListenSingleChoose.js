import Timer from "react-compound-timer";
import React, {useState} from 'react';
import Listener from "../audio/Listener";

import {
    useHistory,
} from "react-router-dom";
import Item from "../Item";

let selected = -1;

function ListenSingleChoose({data}) {

    let {options: pOptions, question, initialTime, src} = data;
    let history = useHistory();

    const setSelected = (event) => {
        selected = event.target.value;
        console.log("selected");
        console.log(selected);
    };

    let current = parseInt(localStorage.getItem("current"));

    let options = pOptions.map((option,index) => <Item onChange={setSelected} text={option} index={index} key={index}/>);

    const [step, setStep] = useState(
        0
    );

    return (
        <div>
            <div className="q-box">
                <div className="q-inner">
                    <div className="card max-100">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                <i className="material-icons">volume_up</i>
                            </div>
                            <h4 className="card-title">Listen</h4>
                        </div>
                        <div className="card-body">
                            {step === 0 && <div className="q-status">Listening will begin in <Timer
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

                            {step === 1 && <Listener src={src} />}


                            <div className="q-main q-options">
                                <div className="row justify-content-center">
                                    {question}
                                </div>
                                <div className="row">
                                    {options}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="q-next">
                <button
                    className="btn btn-primary btn-round next-q"
                    onClick={(event => {
                        localStorage.setItem("q_8",selected);
                        history.replace('/q' + (current + 1));
                    })}
                    >Next
                    <i className="material-icons">keyboard_arrow_right</i>
                </button>
            </div>
        </div>
    )
}

export default ListenSingleChoose
