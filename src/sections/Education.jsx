import React from 'react';
import { Row, Col } from 'reactstrap';
import Section from '../components/Section';

const Education = () => {
  return (
    <Section sectionTitle="Educación" id="education" light>
      <Row>
        <Col lg="4" className=" mb-5 mb-lg-0">
          <h3 className="text-uppercase mb-4">UNITEC</h3>
          <h5 className="text-uppercase mb-4">Titulo: Ing. Sistemas Computacionales</h5>
          <h5 className="text-uppercase mb-4">Inicio: Junio 2016</h5>
          <h5 className="text-uppercase mb-4">Fin: ~</h5>
        </Col>
      </Row>
    </Section>
  );
};

export default Education;
