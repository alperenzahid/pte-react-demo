import React from "react";
import { Link } from "react-router-dom";

function Instructions() {
  let style = {
    icerik: { minHeight: "45vh" },
    card: { marginBottom: "10rem" },
    innerText: { margin: "1rem auto", padding: "2rem" },
    center: { margin: "0px auto" }
  };
  return (
    <div id="content" className="container flex-column">
      <div className="card">
        <div className="card-header card-header-info d-flex justify-content-center">
          <div className="card-icon">
            <i className="material-icons">notes</i>
          </div>
          <h4 className="card-title mt-0 ml-1">General Set of Instructions</h4>
        </div>
        <div className="card-body" id="icerik" style={style.icerik}>
          <div className="q-title">
            It is requested of you to read the below instructions properly and
            abide by them.
          </div>
          <div className="inner text-left" style={style.innerText}>
            <ul>
              <li>
                The test is confidential and you must not disclose it to third
                party as well as try to copy it for your own purpose or
                commercial use.
              </li>
              <li>
                We aim to provide a real simulation of PTE exam and our sole
                purpose is to educate you with the pattern of the exam.
              </li>
              <li>
                The exam consists of four sections Speaking, Writing, Reading
                and Listening curated according to the PTE guidelines.
              </li>
              <li>
                In case you are looking to take a break; please close the test
                window and log out. Once you are ready to take the test, just
                login and continue with the test. It will restart from the point
                you left.
              </li>
              <li>
                The actual PTE exam will have the same number of instruction
                screens as well as the question pattern, it is therefore
                requested of you to attempt the exam in a professional manner.
              </li>
              <li>
                We aim to provide a real simulation and in order to give a
                hassle free exam; we request you to use an update system and
                browser along with a normal/good internet speed.
              </li>
              <li>
                You should avoid taking multiple tests with the same id at the
                same time. The same can lead to unreal test environment.
              </li>
              <li>
                Although we provide the best industry standard simulation,
                sometimes users tend to take the test in unreal test environment
                like low upload speed, internet lag, outdated browser, corrupt
                audio drives, unwanted cache in the browser which leads to
                certain issue in the test conductance. While we can not direct
                every users to fix that issue, we recommend that in case a user
                faces any issue while taking the mock test, they can simply
                close the test window, log out, restart the system and take the
                test. They can also try taking the test in incognito window.
              </li>
              <li>
                In caseof any query, you can easily get in touch with our live
                chat support at our homescreen as well send us the necessary
                feedbacks at the end of the test.
              </li>
              <li>We wish you the best of luck for your PTE Success.</li>
            </ul>
          </div>
        </div>
        <Link to="/intro">
          <div className="q-next mr-4">
            <button className="btn btn-primary btn-round next-q">
              Next <i className="material-icons">keyboard_arrow_right</i>
            </button>
          </div>
        </Link>
      </div>
      <div className="text-center" style={style.center}>
        <p>Pearson Test Of English Academic - Ibn Haldun University</p>
      </div>
    </div>
  );
}

export default Instructions;
