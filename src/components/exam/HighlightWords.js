import React, {useState} from "react";

import {
    useHistory,
} from "react-router-dom";
import Timer from "react-compound-timer";
import Listener from "../audio/Listener";

let clicked = {};

function getActives() {
    let actives = [];
    for (let [id, value] of Object.entries(clicked)) {
        if(value) actives.push(parseInt(id));
    }
    return actives;
}

function CustomSpan({index, text}) {
    const [active, setActive] = useState(
        false
    );

    let _class = "word";
    if(active)
        _class = "word active";

    return (
        <span onClick={(event => {
            clicked[parseInt(event.target.id)] = !active;
            setActive(!active);
        })} className={_class} id={index}>{text}</span>
    )
}

function HighlightWords({data}) {
    let {question, initialTime, src} = data;
    clicked = {};
    let spans = [];
    let words =  question.split(" ");
    console.log(words.length);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        spans.push(<CustomSpan key={i} index={i} text={word} />)
    }

    let history = useHistory();
    let current = parseInt(localStorage.getItem("current"));
    const [step, setStep] = useState(
        0
    );
    return (
        <div>
            <div className="q-box q-highlight">
                <div className="q-inner">
                   <div className="my-3">
                       <div>
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
                           {step === 1 && <Listener src={src} onComplete={() => {
                               setTimeout(function () {
                                   localStorage.setItem("q_9",JSON.stringify(getActives()));
                                   history.replace('/q' + (current + 1));
                               },850)
                           }} />}
                       </div>
                   </div>

                    <div className="card max-100">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                <i className="material-icons">touch_app</i>
                            </div>
                            <h4 className="card-title">Highlight Incorrect Words</h4>
                        </div>
                        <div className="card-body">
                                {spans}
                        </div>
                    </div>
                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q" onClick={(event) => {
                    localStorage.setItem("q_9",JSON.stringify(getActives()));
                    history.replace('/q' + (current + 1));
                }}>Next <i className="material-icons">keyboard_arrow_right</i></button>
            </div>
        </div>
    )
}

export default HighlightWords
