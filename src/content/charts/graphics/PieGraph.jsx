import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

// Gráfico tipo Tarta/Pie, importado de Chart.js-2

//El gráfico recibe las opciones que se le pase y las imprime.
//En este caso puede recibir de un componente padre como PieGraphicBox

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
