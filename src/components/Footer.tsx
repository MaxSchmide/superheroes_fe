import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className='footer'>
      <Nav className='justify-content-center'>
        <Nav.Item>
          <Nav.Link
            target='_blank'
            href='https://github.com/MaxSchmide'
          >
            GitHub
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            target='_blank'
            href='https://www.linkedin.com/in/maxschmide'
          >
            LinkedIn
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            target='_blank'
            href='https://t.me/MaxSchmide'
          >
            Telegram
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            target='_blank'
            href='mailto:kuznetsov.max.v@gmail.com'
          >
            Gmail
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </footer>
  );
};

export default Footer;
