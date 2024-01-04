import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function Userchart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "client",
        data: [50, 45, 29, 38, 12, 42, 23, 25, 46, 10, 5, 23],
        backgroundColor: "#CB5A6F",
        borderColor: "#CB5A6F",
        tension: 0.4, // Adjust the tension value for smoothness (between 0 and 1)
        pointRadius: 0,
        borderWidth: 4,
      },
      {
        label: "caregiver",
        data: [29, 38, 21, 26, 34, 50, 21, 29, 52, 42, 34, 51],
        backgroundColor: "#FFA858",
        borderColor: "#FFA858",
        tension: 0.4, // Adjust the tension value for smoothness (between 0 and 1)
        pointRadius: 0,
        borderWidth: 4,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: "#F5F5F5",
        },
      },
    },
    interaction: {
      intersect: false,
      axis: "x" as const,
    },
    plugins: {
      tooltip: {
        backgroundColor: "rgba(200, 200, 200, 0.2)", // Set the background color of the tooltip
        titleColor: "#000", // Set the color of the tooltip title
        bodyColor: "#000", // Set the color of the tooltip body
        displayColors: false, // Hide the color boxes in the tooltip
        yAlign: "bottom" as const, // Use this to control the placement of the tooltip relative to its point
        mode: "index" as const, // Show tooltip for all datasets when hovering over the chart
        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}
