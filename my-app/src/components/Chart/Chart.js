import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  // Extract the values of each month from the dataPoint array
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Get max value out of all months and pass it as maxValue prop to CharBar component
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {/* dataPoint is an array that controls how chartBar gets rendered */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
