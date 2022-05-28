import Linear from "./graphics/Linear";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

function GraphicBox() {
  const statesM = {
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
  const chartOptionsM = {
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
        text: "Monthly",
        display: true,
        fontSize: 20,
      },
    },
  };

  const statesD = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Graphic",
        data: [15, 16, 15, 14.6, 15, 16, 15.7],
        tension: 0.5,
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  const chartOptionsD = {
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

  const [options, setOptions] = useState(chartOptionsM);
  const [states, setStates] = useState(statesM);

  function handleDataM() {
    setOptions(chartOptionsM);
    setStates(statesM);
  }

  function handleDataD() {
    setOptions(chartOptionsD);
    setStates(statesD);
  }

  return (
    <div className="graphic-box">
      <p className="card-title">Transactions Last Year</p>
      <Row className="p-2">
        <Col>
          <p className="graph-label" onClick={handleDataM}>
            Monthly
          </p>
        </Col>
        <Col>
          <p className="graph-label" onClick={handleDataD}>
            Daily
          </p>
        </Col>
      </Row>
      <Linear chartOptions={options} states={states} />
    </div>
  );
}

export default GraphicBox;
