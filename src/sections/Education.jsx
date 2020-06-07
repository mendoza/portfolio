import React from 'react';

import Section from '../components/Section';
import { Row, Col } from 'reactstrap';

const Education = () => {
  return (
    <Section sectionTitle="Educación" id="education">
      <Row>
        <Col lg="4" className=" mb-5 mb-lg-0">
          <h4 className="text-uppercase mb-4">UNITEC</h4>
          <h5 className="text-uppercase mb-4">Titulo: Ing. Sistemas Computacionales</h5>
          <h5 className="text-uppercase mb-4">Inicio: Junio 2016</h5>
          <h5 className="text-uppercase mb-4">Fin: ~</h5>
        </Col>
      </Row>
    </Section>
  );
};

export default Education;
