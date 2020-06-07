import React from 'react';
import { Container } from 'reactstrap';
import Divider from '../components/Divider';

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center">
      <Container className="d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">David Mendoza</h1>
        <Divider light />
        <p className="masthead-subheading font-weight-light mb-0">
          Ing. Sistemas - Vendedor de burgas - Panadero
        </p>
      </Container>
    </header>
  );
};

export default Header;
