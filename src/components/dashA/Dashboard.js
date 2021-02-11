import React from "react";
import {Link, NavLink} from "react-router-dom";
import Sidebar from "./Sidebar";


function Dashboard() {

    return (
        <div id="dashboard">
            <Sidebar/>
            <div id="admin" className={"main"}>
                <div>
                    <div className="admin-area">
                        <h3 className="admin-title">Upcoming Tests</h3>
                        <div className="admin-box-wrap">
                            <div className="admin-box slide-in-top-1">
                                <div className="icon-box">
                                    <i className="material-icons">
                                        assignment
                                    </i>
                                </div>
                                <div className="admin-box-name">PTE - 15/11/2019</div>
                                <div className="admin-box-time"><i className="material-icons">query_builder</i> 2h 34 min</div>
                                <div className="admin-box-count"><i className="material-icons">list_alt</i> 71 Questions</div>
                                <div className="admin-box-btn">
                                    <Link to="#" className="btn btn-outline-primary btn-round">Loading</Link>
                                </div>
                            </div>
                            <div className="admin-box slide-in-top-2">
                                <div className="icon-box">
                                    <i className="material-icons">
                                        assignment
                                    </i>
                                </div>
                                <div className="admin-box-name">PTE - 16/11/2019</div>
                                <div className="admin-box-time"><i className="material-icons">query_builder</i> 3h 21 min</div>
                                <div className="admin-box-count"><i className="material-icons">list_alt</i> 89 Questions</div>
                                <div className="admin-box-btn">
                                    <Link to="/instructions" className="btn btn-primary btn-round heartbeat">Start Test</Link>
                                </div>
                            </div>
                            <div className="admin-box slide-in-top-3">
                                <div className="icon-box">
                                    <i className="material-icons">
                                        assignment
                                    </i>
                                </div>
                                <div className="admin-box-name">PTE - 17/11/2019</div>
                                <div className="admin-box-time"><i className="material-icons">query_builder</i> Completed</div>
                                <div className="admin-box-count"><i className="material-icons">list_alt</i> 71 Questions</div>
                                <div className="admin-box-btn">
                                    <Link to="/results" className="btn btn-outline-primary btn-round">Results</Link>
                                </div>
                            </div>
                            <div className="admin-box slide-in-top-4">
                                <div className="icon-box">
                                    <i className="material-icons">
                                        assignment
                                    </i>
                                </div>
                                <div className="admin-box-name">PTE - 21/11/2019</div>
                                <div className="admin-box-time"><i className="material-icons">query_builder</i> 2h 34 min</div>
                                <div className="admin-box-count"><i className="material-icons">list_alt</i> 71 Questions</div>
                                <div className="admin-box-btn">
                                    <Link to="#" className="btn btn-outline-primary btn-round">Unlock Test</Link>
                                </div>
                            </div>
                        </div>
                        <Link className={"all-btn"} to={"#"}>All Tests <i className="material-icons">arrow_right_alt</i></Link>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dashboard
