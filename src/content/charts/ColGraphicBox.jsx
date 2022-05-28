import Linear from "./graphics/Linear";
import { Col, Row, Container } from "react-bootstrap";

//Contenedor visible a partir de 576px.
function ColGraphicBox() {
  // array con datos relevantes para imprimir en el gráfico
  const states = {
    // etiquetas de días de los datos para el gráfico
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Graphic",
        // cifras para el gráfico
        data: [10000, 12000, 13500, 13800, 14000, 16000, 15000, 14000],
        //características

        tension: 0.2,
        fill: true,
        backgroundColor: "#6979F8",
        pointBorderColor: "#6979F8",
        pointBackgroundColor: "#6979F8",
        pointRadius: 5,
      },
    ],
  };

  // array con las opciones de formato al imprimir el gráfico
  const chartOptions = {
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
      //título del gráfico. No visible
      title: {
        text: "Weekly",
        display: false,
        fontSize: 20,
      },
    },
  };

  return (
    <>
      <div className="col-der-box">
        <h2 style={{ fontWeight: "bolder" }}>Weekly expenses</h2>
        <div className="graphic-box">
          <Row className="p-2"></Row>
          {/* El componente Linear trata los datos e imprime el Gráfico */}
          <Linear chartOptions={chartOptions} states={states} />
        </div>
        <div className="total-graphic-box">
          <span>Total revenue:</span>
          <h3>$76685.41</h3>
          <p style={{ color: "green" }}> 7,00%</p>
        </div>
      </div>
    </>
  );
}

export default ColGraphicBox;
