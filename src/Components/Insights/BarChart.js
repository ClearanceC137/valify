// ./components/BarChart.js

import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(){
  
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["rgb(38, 100, 115)","rgb(35, 145, 255)"],
        data: [0, 10, 5, 2, 20, 30, 45],
        options:{"responsive":true,"maintainAspectRatio":true,"showScale":false}
      },
    ],
  };
  return (
    <div style={{ position: "relative", margin: "auto", width: "700px" }} >
      <Bar height={100} data={data} />
    </div>
  );
};

export default BarChart;