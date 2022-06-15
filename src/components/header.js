import { Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

const Header = () => {


    return ( <Navbar bg="light" expand="lg" style={{paddingBottom: '0px', paddingTop: '20px'}}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/coinslist">Home</Nav.Link>
          <Nav.Link href="/coinslist" className="active">Coins List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
}

export default Header;
