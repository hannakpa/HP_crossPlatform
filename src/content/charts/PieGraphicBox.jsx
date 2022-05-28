import PieGraph from "./graphics/PieGraph";
import { Col, Row, Container } from "react-bootstrap";

function GraphicBox() {
  const states = {
    labels: ["Screens", "PCs", "Phones"],
    datasets: [
      {
        label: "Graphic",
        data: [2562, 3642, 1443],
        backgroundColor: ["#007AFF", "#FB8832", "#9013FE"],
        tension: 0.5,
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
      },
      scales: {
        x: {
          offset: true,
        },
      },
      title: {
        text: "Daily",
        display: false,
        fontSize: 20,
      },
    },
  };

  return (
    <div className="graphic-box">
      <p className="card-title">Conversion</p>

      <PieGraph chartOptions={chartOptions} states={states} />
    </div>
  );
}

export default GraphicBox;
