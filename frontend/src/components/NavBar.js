
import logo_lfs from '../logo_lfs.png';
import {Button, Navbar, Container, Nav, Form, FormControl} from 'react-bootstrap';

function NavBar() {
    return (

<Navbar bg="dark" expand="lg">
<img src={logo_lfs} className="App" alt="logo"  />
  <Container fluid className="mx-auto" >

    <Navbar.Collapse id="navbarScroll">

      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>

    </Navbar.Collapse>
    <Nav.Link href="#action1">Registrate</Nav.Link>
  </Container>
</Navbar>
    )}
export default NavBar;
