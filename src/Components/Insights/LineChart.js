import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart(props) {
  const labels = Object.keys(props);
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: Object.values(props),
        options:{"responsive":true,"maintainAspectRatio":true,"showScale":false}
      },
    ],
  };

  return (
    <div style={{ position: "relative", margin: "auto", width: "700px",marginTop:"30px" }} >
      <Line data={data}/>
    </div>
  );
};
export default LineChart;