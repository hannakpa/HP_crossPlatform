import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// Gráfico tipo Line, importado de Chart.js-2

//El gráfico recibe las opciones que se le pase y las imprime.
//En este caso puede recibir de un componente padre como ColGraphicBox o GraphicBox
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
