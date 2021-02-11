import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-transparent navbar-expand-lg d-flex align-content-between">
        <button
          className="navbar-toggler ml-auto mr-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul id="navbarZ" className="navbar-nav flex-lg-row">
            <li className="dropdown nav-item ml-lg-auto">
              <Link
                to="#"
                className="dropdown-toggle nav-link top-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">view_day</i> Pearson Test
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">work</i> Pearson Test
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">history</i> Test History
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">trending_up</i> Test
                  Analysis
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">attach_money</i> Pricing
                </Link>
              </div>
            </li>
            <li className="dropdown nav-item">
              <Link
                to="#"
                className="dropdown-toggle nav-link top-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">apps</i> Resources
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">assignment</i> Sample Tests
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">cake</i> Free Resources
                </Link>
              </div>
            </li>
            <li className="dropdown nav-item">
              <Link
                to="#"
                className="dropdown-toggle nav-link top-link"
                data-toggle="dropdown"
              >
                <i className="material-icons">account_balance</i> About Us
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">people</i> Teams
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">assignment</i> Projects
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">call</i> Contacts
                </Link>
              </div>
            </li>
            <li className="dropdown button-container nav-item d-lg-flex">
              <Link
                id="brand"
                className="navbar-brand d-flex pr-lg-2 pl-5 pl-lg-0"
                to="#"
                data-toggle="dropdown"
              >
                <div className="logo-image">
                  <img alt="logo"
                    src="assets/img/tim-logo.png"
                    className="img-fluid"
                  />
                </div>
                <div className="d-flex flex-column">
                  <span className="navbarText">Zahid</span>
                  <span className="navbarText">ALPEREN</span>
                </div>
              </Link>
              <div className="dropdown-menu dropdown-with-icons">
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">person</i> Profile
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">build</i> Settings
                </Link>
                <Link to="#" className="dropdown-item">
                  <i className="material-icons">exit_to_app</i> Log Out
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

     );
}
 
export default NavBar;