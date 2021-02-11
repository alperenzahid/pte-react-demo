import Timer from "react-compound-timer";
import Listener from "../audio/Listener";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function WriteDictation({ data }) {
  let { src, initialTime } = data;
  const [step, setStep] = useState(0);

  let text = "";

  let history = useHistory();
  //let current = parseInt(localStorage.getItem("current"));

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
              {step === 0 && (
                <div className="q-status">
                  Listening will begin in{" "}
                  <Timer
                    checkpoints={[
                      {
                        time: 0,
                        callback: () => setStep(1)
                      }
                    ]}
                    initialTime={initialTime}
                    direction="backward"
                  >
                    <Timer.Seconds />
                  </Timer>{" "}
                  seconds
                </div>
              )}

              {step === 1 && <Listener src={src} />}

              {step === 1 && (
                <div className="q-main">
                  <div className="response">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">
                        Your Answer
                      </label>
                      <textarea
                        className="form-control"
                        onChange={event => {
                          event.persist();
                          text = event.target.value;
                          console.log(event.target.value);
                        }}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="q-next">
        <button
          className="btn btn-primary btn-round next-q"
          onClick={event => {
            localStorage.setItem("q_10", text);
            history.replace('/dashboard?p=d'); //dashboard?p=d ||||| /results
          }}
        >
          Next
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    </div>
  );
}

export default WriteDictation;
