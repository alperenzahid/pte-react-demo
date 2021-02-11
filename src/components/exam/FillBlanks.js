import React from "react";

import {
    useHistory,
} from "react-router-dom";

function FillBlanks({data}) {
    let {question, options} = data;
    let text = question;

    let response = [];

    let history = useHistory();

    let current = parseInt(localStorage.getItem("current"));

    const updateResponse = (event) => {
        event.persist();
        response[parseInt(event.target.name)] = parseInt(event.target.value);
    };
    //
    // for (let i = 0; i < props.data.options.length; i++) {
    //     const tmp = SelectDropdown(i,props.data.options[i]);
    //     console.log("tmp");
    //     console.log(tmp);
    //    text = text.replace("$" + i + "$",tmp);
    // }

    let _split = text.split("$$");

    let out = [];

    for (let i = 0; i < _split.length - 1; i++) {
        response.push(-1);
        out.push(<p className="d-inline" key={i}>{_split[i]}</p>);
        out.push(<SelectDropdown onChange={updateResponse} key={i + 100} id={i} options={options[i]} />);
    }

    return (
        <div>
            <div className="q-box">
                <div className="q-inner">
                    <div className="card max-100">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                <i className="material-icons">list_alt</i>
                            </div>
                            <h4 className="card-title">Fill In The Blanks</h4>
                        </div>
                        <div className="card-body text-left">
                            {out}
                        </div>
                    </div>

                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q" onClick={(event) => {
                    localStorage.setItem("q_7",JSON.stringify(response));
                    history.replace('/q' + (current + 1));
                }}>Next <i className="material-icons">keyboard_arrow_right</i></button>
            </div>
        </div>
    )
}

/**
 * @return {string}
 */
// function SelectDropdown(index,options) {
//
//     let temp = "";
//
//     options.map((text,index) => {
//         temp += `<option value='${index}'>${text}</option>`;
//     });
//     return `<div class="fill-wrap"><select class="select-fill" name='${index}' data-style="select-with-transition" title="Select" data-size="4">
//         ${temp}
//     </select></div>`;
// }

function SelectDropdown({options: pOptions, onChange, id}) {
    let options = [];

    options.push(<option key={-1} value={-1}>Select</option>);

    for (let i = 0; i < pOptions.length; i++) {
        options.push(<option key={i} value={i}>{pOptions[i]}</option>)
    }

    return (
        <div className="fill-wrap"><select onChange={onChange} className="select-fill" name={id}>
            {options}
        </select></div>
    )
}

export default FillBlanks;
