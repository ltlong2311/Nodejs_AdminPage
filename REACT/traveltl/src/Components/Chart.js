import React from "react";
import { Line } from "react-chartjs-2";
const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November","December"],
  datasets: [
    {
      label: "Lượt truy cập",
      data: [1197, 1002, 1073, 699, 771, 1244, 941, 922, 1681, 1834, 1268, 1430],
      fill: true,
      backgroundColor: "#cce3f7",
      borderColor: "#0275d8",
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
    },
  ],
 
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
    // x: {
    //   display: false
    // }
  }
};
function Chart() {
  return (
    <>
      <Line data={data} options={options}/>
    </>
  );
}

export default Chart;
