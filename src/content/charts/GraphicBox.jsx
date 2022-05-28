import Linear from "./graphics/Linear";
import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";

function GraphicBox() {
  //array con datos mensuales
  const statesM = {
    // etiquetas de meses de los datos para el gráfico
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Graphic",
        // cifras para el gráfico
        data: [26, 26.5, 27, 26.6, 26.5, 26.3, 26, 25.8],
        //características
        tension: 0.5,
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  //array con opciones para imprimir los datos mensuales
  const chartOptionsM = {
    //visibilidad de la leyenda
    plugins: {
      legend: {
        display: false,
      },
      //escalas
      scales: {
        x: {
          offset: true,
        },
      },
      //título del gráfico. Visible
      title: {
        text: "Monthly",
        display: true,
        fontSize: 20,
      },
    },
  };

  //array con datos diarios
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

  //array con opciones para imprimir los datos diarios
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

  //set para actualizar los datos que el uruario quiere que se dibujen en el gráfico. Por defecto se verán los datos mensuales.
  const [options, setOptions] = useState(chartOptionsM);
  const [states, setStates] = useState(statesM);

  //función que asigna a options los datos estados y de opciones mensuales
  function handleDataM() {
    setOptions(chartOptionsM);
    setStates(statesM);
  }

  //función que asigna a options los datos de estados y de opciones diarias
  function handleDataD() {
    setOptions(chartOptionsD);
    setStates(statesD);
  }

  return (
    <div className="graphic-box">
      <p className="card-title">Transactions Last Year</p>
      <Row className="p-2">
        <Col>
          {/* Al darle click se ejecuta la función que actualiza los datos que se envían al componente Lineal con los que contiene el array de mensuales */}
          <p className="graph-label" onClick={handleDataM}>
            Monthly
          </p>
        </Col>
        <Col>
          {/* Al darle click se ejecuta la función que actualiza los datos que se envían al componente Lineal con los que contiene el array de diarios */}
          <p className="graph-label" onClick={handleDataD}>
            Daily
          </p>
        </Col>
      </Row>
      {/* Se pasa como propiedades los datos que en el momento contengan las variables options y states/ pueden ser mensuales o diarios, dependiendo de lo que elija el usuario */}
      <Linear chartOptions={options} states={states} />
    </div>
  );
}

export default GraphicBox;
