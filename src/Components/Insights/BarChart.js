import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart(props){
  
  const labels = Object.keys(props);
  const data = {
    labels: labels,
    datasets: [
      {
        
        backgroundColor: ["rgb(38, 100, 115)","rgb(35, 145, 255)"],
        data: Object.values(props),
        options:{"responsive":true,"maintainAspectRatio":true,"showScale":false}
      },
    ],
  };
  return (
    <div style={{ position: "relative", margin: "auto", width: "900px" }} >
      <Bar height={100} data={data} />
    </div>
  );
};

export default BarChart;