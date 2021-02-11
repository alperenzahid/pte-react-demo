import React from "react";
import {Link} from 'react-router-dom';  

const Tests = () => {
  return (
    <div className="row align-content-around">
      <div className="col-md-4 col-xl-3 ml-auto mr-auto">
        <div className="card card-pricing bg-dark">
          <div className="card-body ">
            <div className="icon">
              <i className="material-icons">assignment</i>
            </div>
            <h4 className="card-title">PTE - 15/11/2019</h4>
            <p className="card-description d-flex justify-content-center">
              <i className="material-icons">timelapse</i>
              <span className="ml-1 pt013">2 h 54 min</span>
            </p>
            <p>71 Question</p>
            <Link to="#" className="btn btn-white btn-round" disabled>
              LOADING
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3 ml-auto mr-auto">
        <div className="card card-pricing bg-success">
          <div className="card-body ">
            <div className="icon">
              <i className="material-icons">assignment</i>
            </div>
            <h4 className="card-title">PTE - 15/10/2019</h4>
            <p className="card-description d-flex justify-content-center">
              <i className="material-icons">timelapse</i>
              <span className="ml-1 pt013">2 h 54 min</span>
            </p>
            <p>71 Question</p>
            <Link
              to="/instructions"
              className="btn btn-white btn-round heartbeat"
            >
              Start Test
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3 ml-auto mr-auto">
        <div className="card card-pricing bg-warning">
          <div className="card-body ">
            <div className="icon">
              <i className="material-icons">assignment</i>
            </div>
            <h4 className="card-title">PTE - 15/09/2019</h4>
            <p className="card-description d-flex justify-content-center">
              <i className="material-icons">alarm_on</i>
              <span className="ml-1 pt013">Completed</span>
            </p>
            <p>2019-09-15 02:26 PM</p>
            <Link to="#" className="btn btn-white btn-round" disabled>
              Results
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-xl-3 ml-auto mr-auto">
        <div className="card card-pricing bg-info">
          <div className="card-body ">
            <div className="icon">
              <i className="material-icons">assignment</i>
            </div>
            <h4 className="card-title">PTE - 15/08/2019</h4>
            <p className="card-description d-flex justify-content-center">
              <i className="material-icons">timelapse</i>
              <span className="ml-1 pt013">2 h 54 min</span>
            </p>
            <p>71 Question</p>
            <Link to="#" className="btn btn-white btn-round" disabled>
              Unlock Test
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
