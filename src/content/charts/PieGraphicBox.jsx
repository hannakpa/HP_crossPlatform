import PieGraph from "./graphics/PieGraph";
import { Col, Row, Container } from "react-bootstrap";

function GraphicBox() {
  const states = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Graphic",
        data: [26, 26.5, 27, 26.6, 26.5, 26.3, 26, 25.8],
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
        display: false,
      },
      scales: {
        x: {
          offset: true,
        },
      },
      title: {
        text: "Daily",
        display: true,
        fontSize: 20,
      },
    },
  };

  return (
    <div className="graphic-box">
      <p className="card-title">Transactions Last Year</p>

      <PieGraph chartOptions={chartOptions} states={states} />
    </div>
  );
}

export default GraphicBox;
