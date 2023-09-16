import { Navbar, Container, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { useState } from "react";
import AddModal from "./AddModal";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

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
              <Button onClick={handleShowModal}>Add New</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <AddModal
        show={showModal}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Header;
