import { Navbar, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useState } from "react";
import ModalForm from "./Modal";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header className='shadow-sm'>
        <Navbar>
          <Container>
            <NavLink to='/'>
              <img
                height={60}
                width={60}
                src={logo}
                alt='Marvel and DC logotype'
              />
            </NavLink>
            <Navbar.Collapse className='justify-content-end'>
              <Button onClick={() => setShowModal(true)}>Add New</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <ModalForm
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Header;
