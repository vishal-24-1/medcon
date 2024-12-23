import React from "react";
import { Line } from "react-chartjs-2";
import GaugeChart from "react-gauge-chart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Gauge = () => {
  const targetValue = 7.0; // Target value on a scale of 10
  const currentValue = 5.7; // Current value on a scale of 10

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Conversion Rate",
        data: [2, 2.9, 3.7, 5.2, 5.5, 5.7], // Example data
        borderColor: "#3498db",
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        fill: true,
        tension: 0.5, // Smooth curves
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow chart to stretch
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { title: { display: true, text: "Months" } },
      y: {
        title: { display: true, text: "Conversion Rate (%)" },
        beginAtZero: true,
      },
    },
  };

  // Helper to calculate angle for the target line
  const calculateAngle = (value, maxScale = 10) => {
    const angleRange = 180; // Gauge covers 180 degrees
    const angleOffset = -90; // Start at -90 degrees (leftmost point)
    return (value / maxScale) * angleRange + angleOffset; // Calculate angle for the value
  };

  const targetAngle = calculateAngle(targetValue); // Calculate angle for the target

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {/* Gauge Chart */}
        <GaugeChart
          id="gauge-chart"
          nrOfLevels={10} // Scale of 10
          colors={["#FF0000", "#FFFF00", "#00FF00"]}
          percent={currentValue / 10} // Arrow position
          arcWidth={0.3}
          textColor="#000"
          style={{
            width: "100%",
            maxWidth: "300px",
            margin: "0 auto",
          }}
        />
        {/* Hide Default Text */}
        <style>
          {`
            #gauge-chart text {
              display: none; /* Hides the default percentage */
            }
          `}
        </style>
        {/* Current Value Display */}
        <div
          style={{
            position: "absolute",
            top: "45%", // Position it near the center of the gauge
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {`${currentValue}%`} {/* Display 5.7% */}
        </div>
        {/* Target Slanted Line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `rotate(${targetAngle}deg) translateY(-70px)`, // Adjust upwards
            transformOrigin: "center bottom", // Ensure the line rotates around the gauge center
            width: "2px",
            height: "50px", // Shorter height to fit within the gauge area
            backgroundColor: "#FF0000",
            zIndex: 10,
          }}
        ></div>
        {/* Target Label */}
        <div
          style={{
            position: "absolute",
            top: "35%", // Adjust label position near the end of the line
            left: `${50 + Math.cos((targetAngle * Math.PI) / 180) * 40}%`,
            transform: `translate(-50%, -50%)`,
            fontSize: "12px",
            color: "#FF0000",
            fontWeight: "bold",
            zIndex: 10,
          }}
        >
          Target 7.0%
        </div>
      </div>
      {/* Line Chart */}
      <div
        style={{
          height: "110px",
          width: "100%",
        }}
      >
        <Line data={lineData} options={lineOptions} />
      </div>
    </div>
  );
};

export default Gauge;
