import Linear from "./graphics/Linear";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

function ColGraphicBox() {
  const states = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Graphic",
        data: [10000, 12000, 13500, 13800, 14000, 16000, 15000, 14000],
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
        text: "Monthly",
        display: false,
        fontSize: 20,
      },
    },
  };

  return (
    <>
      <h1>Weekly expenses</h1>
      <div className="graphic-box">
        <Row className="p-2"></Row>
        <Linear chartOptions={chartOptions} states={states} />
      </div>
      <h3>Total revenue:</h3>
      <h5>$76685.41</h5>
    </>
  );
}

export default ColGraphicBox;
