import { Navbar, NavbarBrand, Container, NavLink } from "react-bootstrap";
import Logo from "../../img/logo.png";
import Banks from "../../img/BANKS.png";

function NavFixed() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <NavbarBrand>
          <div className="logo-box">
            <img src={Logo} />
            <img src={Banks} />
          </div>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default NavFixed;
