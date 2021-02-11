import React from "react";

let labels = ["A","B","C","D","E","F"];
//Multi Optıon Single Answer sorularındaki şıkları temsil eden component
function Item({index, text, onChange}) {
    return (
        <div className="col-6">
            <div className="box">
                <div className="form-check form-check-radio">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="item" value={index} onChange={onChange} />
                        {labels[index]}) {text}
                        <span className="circle">
                            <span className="check"/>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
}


export default Item
