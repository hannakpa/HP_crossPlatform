import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

function Linear({ chartOptions, states }) {
  Chart.defaults.color = "grey";
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  return (
    <>
      <Line options={chartOptions} data={states} />
    </>
  );
}

export default Linear;
