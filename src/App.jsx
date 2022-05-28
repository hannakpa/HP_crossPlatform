import "./styles/fixed/app.css";
import NavFixed from "./fixed/navbar/NavFixed";
import { Container, Row, Col } from "react-bootstrap";
import TextIntro from "./content/text/TextIntro";

function App() {
  return (
    <div>
      <NavFixed />
      <Container>
        <Row>
          <Col md="4">
            {/* Row 1 con texto */}
            <Row>
              <TextIntro />
            </Row>
            {/* Row 2 con cartas */}
            <Row>
              {/* cada carta es una columna */}
              <p>cartas</p>
            </Row>
            {/* Row 3 con gr'afico */}
            <Row>
              <h3>GRAFICO ENTERO</h3>
            </Row>
          </Col>
          {/* Columna 2 */}
          <Col md="8">
            {/* Row 1 con texto */}
            <Row>{/* <Header/> */}</Row>
            {/* Row 2 con grafico entero */}
            {/* Grafico entero */}
            <h3>GRAFICO GIGANTE</h3>
            {/* Row 3 con numeros */}
            <Row>
              <p>total reveniew</p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;