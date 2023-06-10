import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";

function PieChart(props){
  const labels = Object.keys(props);
  const data = {
    labels: labels,
    datasets: [
      {
        label: labels,
          backgroundColor: ["rgb(38, 100, 115)","rgb(35, 145, 255)"],
          data: Object.values(props),
          options:{"responsive":true,"maintainAspectRatio":true,"showScale":false}
      },
    ],
  };
  return (
    <div style={{ position: "relative", margin: "auto", width: "350px" }} >
      <Pie data={data} />
    </div>
  );
};
export default PieChart;