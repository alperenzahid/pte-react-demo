import React, { useEffect } from "react";
import {Route} from "react-router-dom";
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
    { name: "Settings", icon: "toys", id: "3" }
  ];

  let result = location.search; // /dashboard?p=d gelirse Dashboard'i acsin.
  if (result != null && result.includes("p=d")) {
    console.log("Islem Basarili");
    tabToActive = "Dashboard";
  }
  console.log(tabToActive);

  const selectTabAsActive = id => {
    let filtered = tabs.filter(tab => tab.name == tabToActive)[0];
    return filtered.id == id ? " active" : "";
  };

  return (
    <div id="dashboardZ" className="w-auto h-auto d-flex flex-column">
      <div id="umb" className="d-md-flex">
        <SideBar tabs={tabs} tabToActive={tabToActive} />
        <div id="rightSide" className="p-0">
          <NavBar />
          <div className="container">
            <div className="tab-content">              
              {/* Nested Routing yapinca css vs cagirmada sorun olabiliyor.
              <Route path="/dashboard/tests" component={Tests} />
              <Route path="/dashboard/settings" component={Settings} />
              <Route path="/dashboard/" component={Dash} /> */}
              <div className={"tab-pane" + selectTabAsActive(1)} id="tab1">
                <Dash />
              </div>
              <div className={"tab-pane" + selectTabAsActive(2)} id="tab2">
                <Tests />
              </div>
              <div className={"tab-pane" + selectTabAsActive(3)} id="tab3">
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
