import {Link, NavLink} from "react-router-dom";
import React from "react";


function Sidebar() {
    return (
        <div id="sidebar">
            <div>
                <div id="side-logo">
                    <a href="#">
                        <img src="logo-small.svg" alt=""/>
                    </a>
                </div>
                <div id="side-menu">
                    <ul>
                        <li>
                            <NavLink activeClassName="active"  to="/dashboard">
                                <i className="material-icons">home</i> Dashboard
                            </NavLink>
                        </li>

                        <li>
                            <NavLink activeClassName="active" to="/results">
                                <i className="material-icons">assessment</i> Results
                            </NavLink>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="material-icons">account_circle</i> Account
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="material-icons">help_outline</i> Help
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <i className="material-icons">input</i> Logout
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
