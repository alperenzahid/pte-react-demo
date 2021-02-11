import React from "react";
import BarChart from "./charts/BarChart";
import RadarChart from "./charts/RadarChart";
import RadialChart from "./charts/RadialChart";
import ColumnChart from "./charts/ColumnChart";

const Dash = () => {
  return (
    <div>
      <ColumnChart />
      <hr />
      <div className="row">
        <div className="col-md-6">
          <RadarChart />
        </div>
        <div className="col-md-6">
          <RadialChart />
        </div>
      </div>
      <hr />
      <BarChart />
    </div>
  );
};

export default Dash;
