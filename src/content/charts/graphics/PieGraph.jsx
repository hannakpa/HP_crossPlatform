import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

function PieGraph({ chartOptions, states }) {
  Chart.defaults.color = "grey";
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

  return (
    <>
      <Pie options={chartOptions} data={states} />
    </>
  );
}

export default PieGraph;
