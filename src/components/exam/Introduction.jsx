import React from "react";
import { Link } from "react-router-dom";

function Introduction() {
  let style = {
    icerik: { minHeight: "45vh" },
    card: { marginBottom: "10rem" },
    innerText: { margin: "1rem auto", padding: "2rem" },
    center: { margin: "0px auto" },
    timerImg: { borderRadius: "1.5em", display: "flex", margin: "1rem auto" }
  };
  return (
    <div id="content" className="container flex-column">
      <div className="card">
        <div className="card-header card-header-info d-flex justify-content-center">
          <div className="card-icon">
            <i className="material-icons">notes</i>
          </div>
          <h4 className="card-title mt-0 ml-1">Test Introduction</h4>
        </div>
        <div className="card-body" id="icerik" style={style.icerik}>
          <div className="q-title">
            This test measures the Reading, Writting, Listening and Speaking
            skills in English that you will need in an academic setting.
          </div>
          <div className="inner text-left" style={style.innerText}>
            <ul>
              <li>
                The timer is shown on the top right corner of the screen along
                with the number of items/questions in the mock test
              </li>
              <img style={style.timerImg} src="assets/img/timer.png" alt="" />
              <li>
                By clicking on the Next button at the bottom of each screen you
                confirm your answer and more to the next question. If you click
                on Next you will not be able to return to the previous question.
                You will not be able to revist any questions at the end of the
                test
              </li>
              <li>
                You can take a break, by closing the test window and logging
                out. You can resume from the point you left once you login.
              </li>
              <li>
                This is test makes use of different varieties of English, for
                example, British, American, Australian. You can answer in the
                standard English variety of your choice
              </li>
            </ul>
          </div>
        </div>
        <Link to="/check">
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

export default Introduction;
