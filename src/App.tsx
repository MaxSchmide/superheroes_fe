import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <main className='min-h-screen py-10 relative'>
          <Outlet />
        </main>
      </Container>

      <Footer />
    </>
  );
};

export default App;
