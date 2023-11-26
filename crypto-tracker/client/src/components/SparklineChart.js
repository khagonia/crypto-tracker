import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const SparklineChart = ({ data, isGreen }) => {
  const chartData = {
    labels: data.map((point, index) => index),
    datasets: [
      {
        label: "",
        data: data,
        backgroundColor: "#FFFFFF",
        borderColor: isGreen ? "rgb(0, 215, 0)" : "rgb(255,0,0)",
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{
      width: '100%',
      height: '90px',
      maxWidth: '200px',
      marginLeft: '2.4rem'
    }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SparklineChart;
