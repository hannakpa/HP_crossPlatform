import "./styles/fixed/app.css";

import NavFixed from "./fixed/navbar/NavFixed";
import { Container, Row, Col } from "react-bootstrap";
import TextIntro from "./content/text/TextIntro";
import TransCards from "./content/cards/TransCards";
import GraphicBox from "./content/charts/GraphicBox";
import PieGraphicBox from "./content/charts/PieGraphicBox";
import ColGraphicBox from "./content/charts/ColGraphicBox";
import BottomNav from "./fixed/navbar/BottomNav";

const cardsInfo = [
  {
    numTrans: 35,
    moment: "LAST MOMENT",
  },
  {
    numTrans: 3,
    moment: "TODAY",
  },
];

function App() {
  return (
    <div>
      <NavFixed />
      <Container>
        <Row>
          <Col sm="4">
            {/* Row 1 con texto */}
            <Row className="d-sm-none">
              <TextIntro />
            </Row>
            {/* Row 2 con cartas */}
            <Row>
              {/* cada carta es una columna */}
              <TransCards info={cardsInfo} />
            </Row>
            {/* Row 3 con gr'afico */}
            <Row className="d-sm-none">
              <GraphicBox />
            </Row>
            {/* aparece a partir de md */}
            <Row className="d-none d-sm-block">
              <PieGraphicBox />
            </Row>

            <Row>
              <BottomNav />
            </Row>
          </Col>
          {/* Columna 2 */}
          <Col sm="8" className="d-none d-sm-block">
            {/* Row 1 con texto */}

            {/* Row 2 con grafico entero */}
            {/* Grafico entero */}
            <Row>
              <ColGraphicBox />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
