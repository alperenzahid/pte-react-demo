import React from "react";
import {Container,gcards} from './example'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import {
    useHistory,
} from "react-router-dom";

function ReorderParagraph(props) {

    let history = useHistory();
    let current = parseInt(localStorage.getItem("current"));

    return (
        <div>
            <div className="q-box q-reorder">
                <div className="q-inner">
                    <div className="card max-100">
                        <div className="card-header card-header-rose d-flex justify-content-center">
                            <div className="card-icon">
                                <i className="material-icons">drag_handle</i>
                            </div>
                            <h4 className="card-title">Reorder Paragraph</h4>
                        </div>
                        <div className="card-body">

                            <div className="q-main q-drag-options">
                                <div className="row">
                                    <DndProvider backend={HTML5Backend}>
                                        <Container options={props.data.options} />
                                    </DndProvider>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            <div className="q-next">
                <button className="btn btn-primary btn-round next-q"
                        onClick={(event) => {
                            localStorage.setItem("q_6",JSON.stringify(gcards));
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



export default ReorderParagraph
