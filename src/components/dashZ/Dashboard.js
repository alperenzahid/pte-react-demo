import React from "react";
import SideBar from "./sidebar";
import NavBar from "./navbar";
import Footer from "./footer";
import Dash from "./dash";
import Tests from "./tests";
import Settings from "./settings";

function Dashboard({ tabToActive, location }) {
   const tabs = [
    { name: "Dashboard", icon: "dashboard", id: "1" },
    { name: "Tests", icon: "list", id: "2" },
    { name: "Settings", icon: "settings", id: "3" }
  ];

  let result = location.search; // /dashboard?p=d gelirse Dashboard'i acsin.
  if (result != null && result.includes("p=d")) {
    tabToActive = "Dashboard";
  }
  const selectTabAsActive = id => {
    return tabs[id].name === tabToActive ? " active" : "";
  };

  return (
    <div id="dashboardZ" className="w-auto h-auto d-flex flex-column">
      <div id="umb" className="d-md-flex">
        <SideBar tabs={tabs} tabToActive={tabToActive} />
        <div id="rightSide" className="p-0">
          <NavBar />
          <div className="container">
            <div className="tab-content">
              <div className={"tab-pane" + selectTabAsActive(0)} id="tab1">
                <Dash />
              </div>
              <div className={"tab-pane" + selectTabAsActive(1)} id="tab2">
                <Tests />
              </div>
              <div className={"tab-pane" + selectTabAsActive(2)} id="tab3">
                <Settings />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
