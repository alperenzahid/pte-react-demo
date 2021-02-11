import React from 'react';
import {
    useHistory,
} from "react-router-dom";
import Item from "../Item";


let selected = -1;

function ReadingSingleChoose({data}) {

    let {options: pOptions, question} = data;
    const setSelected = (event) => {
        selected = event.target.value;
        console.log("selected");
        console.log(selected);
    };

    let history = useHistory();


    let options = pOptions.map((option,index) => <Item onChange={setSelected} text={option} index={index} key={index}/>);

    let current = parseInt(localStorage.getItem("current"));

    return (
        <div>
            <div className="q-box q-single-choose">
                <div className="q-inner">
                    <div className="card">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                <i className="material-icons">touch_app</i>
                            </div>
                            <h4 className="card-title">Choose Single Option</h4>
                        </div>
                        <div className="card-body">

                            <p>
                                {question}
                            </p>

                            <div className="q-main q-options">
                                <div className="row">
                                    {options}
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q"
                        onClick={(event) => {
                            localStorage.setItem("q_5",selected);
                            history.replace('/q' + (current + 1));
                        }}
                        >Next <i
                    className="material-icons">
                    keyboard_arrow_right
                </i></button>
            </div>
        </div>
    )
}



export default ReadingSingleChoose
