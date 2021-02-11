import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gRecorder, initgRecorder, getAudioUrl } from "../../common/Recorder";

function CheckAudio() {
  const [state, setState] = useState({
    step: 0,
    isNext: false,
    hasError: false,
    error: ""
  });

  let onRecord = () => {
    console.log("on record");
    try {
      gRecorder.start();
      console.log("Record basladi");
      setState(state => ({
        step: 2,
        hasError: false,
        error: ""
      }));
    } catch (e) {
      console.log("Record baslatilamadi", e.message);
      setState(state => ({
        step: 0,
        hasError: true,
        error: "To Continue, Unblock Microphone Usage"
      }));
    }
  };

  let stop = () => {
    console.log("stop");
    gRecorder.stop();
    setState(state => ({
      step: 3
    }));
    setTimeout(function() {
      setState(state => ({
        step: 4,
        isNext: true
      }));
    }, 1000);
  };

  let micListener = async () => {
    let res = await initgRecorder();
    if ("hasError" in res) {
      setState(state => ({
        ...res
      }));
    } else {
      setState(state => ({
        step: 1,
        hasError: false,
        error: ""
      }));
    }
  };

  useEffect(() => {
    if (!("MediaRecorder" in window)) {
      setState(state => ({
        hasError: true,
        error: "Your browser does not support the audio!"
      }));
    }
  }, []);

  let style = {
    icerik: { minHeight: "45vh" },
    card: { marginBottom: "10rem" },
    innerText: { maxWidth: "35vw", margin: "1rem auto" },
    center: { margin: "0px auto" }
  };

  return (
    <div id="content" className="container flex-column">
      <div className="card" style={style.card}>
        <div className="card-header card-header-info d-flex justify-content-center">
          <div className="card-icon">
            <i className="material-icons">keyboard_voice</i>
          </div>
          <h4 className="card-title mt-0">Audio Check</h4>
        </div>
        <div className="card-body" id="icerik" style={style.icerik}>
          <div className="q-title">
            We will now test your headset and microphone, so as to ensure that
            it functioning properly.
          </div>
          <div className="inner text-center" style={style.innerText}>
            <div className="mic-wrap">
              {state.step === 0 && (
                <button
                  id="mic"
                  className="btn btn-primary btn-round font-weight-bold"
                  onClick={micListener}
                >
                  Get Microphone
                </button>
              )}

              {state.step === 1 && (
                <button
                  className="btn btn-outline-primary btn-round"
                  id="record"
                  onClick={onRecord}
                >
                  Record
                </button>
              )}

              {state.step === 2 && (
                <button
                  className="btn btn-outline-primary btn-round"
                  onClick={stop}
                >
                  Stop
                </button>
              )}

              {state.step === 2 && (
                <div id="loading" className="text-center">
                  <span id="time" /> <br />
                  <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />{" "}
                  <br />
                  <span>Recording...</span>
                </div>
              )}

              {state.step === 3 && (
                <div id="loading" className="text-center">
                  <span id="time" /> <br />
                  <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />{" "}
                  <br />
                  <span>Loading...</span>
                </div>
              )}

              {state.isNext && (
                <div id="out">
                  <audio id="ses" controls src={getAudioUrl()} />
                </div>
              )}

              {state.hasError && (
                <div id="out">
                  <div className="alert alert-danger mt-1" role="alert">
                    {state.error}
                  </div>
                </div>
              )}

              {state.isNext && (
                <div id="next">
                  <Link
                    to={"/q1"}
                    className="btn btn-success btn-next btn-round"
                  >
                    Next <i className="material-icons">keyboard_arrow_right</i>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <ul className="list-group">
                <li>
                  Place your headset and position your microphone near the
                  mouth.
                </li>
                <li>Click "Get Microphone" and Click Allow for permissions</li>
                <li>
                  Once you are ready, click on "Record" and speak "Hello, I am
                  going to succeed in PTE exam."
                </li>
                <li>Once you have finished spoken, click on Stop button.</li>
                <li>Click on "Play" to hear yourself speaking.</li>
                <li>
                  If you are not able to hear the sound, please check your
                  headset and system settings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center" style={style.center}>
        <p>Pearson Test Of English Academic - Ibn Haldun University</p>
      </div>
    </div>
  );
}

export default CheckAudio;
