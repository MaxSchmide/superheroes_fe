import { Navbar, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className='shadow-sm'>
      <Navbar>
        <Container>
          <Navbar.Brand href='/'>
            <img
              height={60}
              width={60}
              src={logo}
              alt='Marvel and DC logotype'
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Button>Add New</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
