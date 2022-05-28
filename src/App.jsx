import "./styles/fixed/app.css";

import NavFixed from "./fixed/navbar/NavFixed";
import { Container, Row, Col } from "react-bootstrap";
import TextIntro from "./content/text/TextIntro";
import TransCards from "./content/cards/TransCards";
import GraphicBox from "./content/charts/GraphicBox";
import PieGraphicBox from "./content/charts/PieGraphicBox";
import ColGraphicBox from "./content/charts/ColGraphicBox";
import BottomNav from "./fixed/navbar/BottomNav";

//datos obtenidos de una base de datos. Informaicón sobre el número de transacciones del cliente y el momento en que se efectuó.
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
          {/* Columna izquierda. Siempre visible.  */}
          <Col sm="4">
            {/* Row 1 con texto */}
            <Row className="d-sm-none">
              {/* Texto introductorio. Solo en versión móvil */}
              <TextIntro />
            </Row>
            {/* Row 2. Sección que muestra cartas, cada una en una columna */}
            <Row>
              {/* paso de información del array cardsInfo del usuario autenticado. TransCards los imprime */}
              <TransCards info={cardsInfo} />
            </Row>
            {/* Row 3. Gráfico Lineal. Aparece en versión móvil. Oculta a partir de 576px*/}
            <Row className="d-sm-none">
              <GraphicBox />
            </Row>
            {/* Row 4. Gráfico Pie. Aparece solo a partir de 576px*/}
            <Row className="d-none d-sm-block">
              <PieGraphicBox />
            </Row>
            {/* Row 5. Barra de navegación solo para versión móvil. Se oculta a partir de 576px*/}
            <Row>
              <BottomNav />
            </Row>
          </Col>
          {/* Columna derecha. Visible a partir de 576px*/}
          <Col sm="7" className="d-none d-sm-block">
            {/* Row 2 con grafico entero */}
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
