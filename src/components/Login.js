import React from "react";
import { useHistory, Link } from "react-router-dom";

function Login() {
    let history = useHistory();
    document.getElementById("root").setAttribute('class','body index-page sidebar-collapse Aligner mh-100');
    return (
            <div id="login" >
                <div id="logo-area">
                    <a href="https://www.ihu.edu.tr/" target="_blank">
                        <img src="logo.svg" alt="logo"/>
                        </a>
                </div>
                <div id="form-area" className="inner-form">
                    <form action="" onSubmit={(event => {history.replace('/dashboard');})}>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                          <span className="input-group-text">
                              <i className="material-icons">email</i>
                          </span>
                                </div>
                                <input type="email" required={true} className="form-control" id="email"  placeholder="Email" value="student34@ihu.edu.tr" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <div className="input-group-prepend">
                          <span className="input-group-text">
                              <i className="material-icons">vpn_key</i>
                          </span>
                                </div>
                                <input type="password" required={true} className="form-control" id="password"  placeholder="Password" value="Ibnhaldun"/>
                            </div>
                        </div>
                        <div id="btn-area">
                            <Link to="#" id="forget-password">
                                Lost your password?
                            </Link>
                            <button type="submit" className="btn btn-primary btn-round" id="btn-login">
                                Login <i className="material-icons">
                                keyboard_arrow_right
                            </i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    )
}

export default Login
