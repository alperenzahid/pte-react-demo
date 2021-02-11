import React from 'react';

const SideBar = ({tabs, tabToActive}) => {
    return ( 
<div id="sidebarZ" className="d-none d-lg-flex">
          <img
            className="logoSmall mx-auto"
            alt=""
            src="assets/img/logo-small.svg"
          />
          <ul
            id="sideList"
            className="nav nav-pills nav-pills-primary flex-column mx-auto"
          >
            {tabs.map((tab, index) => {
                return <li key={index} className="nav-item">
                <a
                  className={
                    "nav-link side-link" + (tab.name === tabToActive ? " active" : "")
                  }
                  href={"#tab" + (index+1)}
                  data-toggle="tab"
                >
                  <i className="material-icons">{tab.icon}</i>
                  {tab.name}
                </a>
               </li>
            })}
          </ul>
        </div>
        
     );
}
 
export default SideBar;

