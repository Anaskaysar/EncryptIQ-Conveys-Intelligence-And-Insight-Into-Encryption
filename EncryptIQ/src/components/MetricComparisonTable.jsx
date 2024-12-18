import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SectionHeader from "./SectionHeader";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MetricComparisonTable = () => {
  const chartData = {
    labels: ["Encryption Time", "Key Size Options"],
    datasets: [
      {
        label: "AES",
        data: [90, 3], // 90 = faster, 3 key sizes (128, 192, 256)
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "RSA",
        data: [60, 3], // 60 = slower, 3 key sizes (1024, 2048, 4096)
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow custom height
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Performance Comparison of AES and RSA",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12, // Smaller font for ticks
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 12, // Smaller font for labels
          },
        },
      },
    },
  };

  return (
    <div className="mt-5">
      <SectionHeader title="Performance Metrics" />
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Fixed height and responsive wrapper */}
        <div className="relative h-64 w-full">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MetricComparisonTable;
