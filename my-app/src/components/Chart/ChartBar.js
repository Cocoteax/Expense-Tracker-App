import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    // This gives us the percentage of how much each bar should be filled
    // We need to add this string as a CSS style dynamically using the style property (See below)
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* To dynamically set css stylings, we use style property which expects an object containing key-value css pairs*/}
        {/* If the key has a dash sign, then we need to wrap the key around quotes or use camel casing */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
