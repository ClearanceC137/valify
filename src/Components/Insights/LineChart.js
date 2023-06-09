import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
        options:{"responsive":true,"maintainAspectRatio":true,"showScale":false}
      },
    ],
  };
  return (
    <div style={{ position: "relative", margin: "auto", width: "700px",marginTop:"80px" }} >
      <Line data={data}/>
    </div>
  );
};
export default LineChart;