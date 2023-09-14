import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='footer'>
      <Nav className='justify-content-center'>
        <Nav.Item>
          <Nav.Link href='https://github.com/MaxSchmide'>GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='disabled'
            disabled
          >
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
