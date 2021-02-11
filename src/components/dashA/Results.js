import React from "react";
import Sidebar from "./Sidebar";
import ColumnChart from "../dashZ/charts/ColumnChart";
import BarChart from "../dashZ/charts/BarChart";
import RadarChart from "../dashZ/charts/RadarChart";
import RadialChart from "../dashZ/charts/RadialChart";

const SKILLS = [
    {type: "Listening", level: 65},
    {type: "Reading", level: 60},
    {type: "Writing", level: 70},
    {type: "Speaking", level: 75},
];

function Results() {

    return (
        <div id="dashboard">
            <Sidebar/>
            <div id="admin">
                <div>
                    <div className="admin-area">
                        <h3 className="admin-title">Results</h3>
                        <ColumnChart />
                        <hr/>
                        <div className="row">
                            <div className="col-6">
                                <RadarChart />
                            </div>
                            <div className="col-6">
                                <RadialChart />
                            </div>
                        </div>
                        <hr/>
                        <BarChart />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
