import React from 'react';
import { Row, Col } from 'reactstrap';
import Section from '../components/Section';

const About = () => {
  return (
    <Section sectionTitle="Acerca de mi" id="about" light>
      <Row>
        <Col xs={12} className="ml-auto">
          <p className="lead">
            Soy una persona que no se rinde, me gusta dar todo lo que pueda hasta que algo me salga
            como tenía que, y como yo quería. Me gusta hacer que todo este bien hecho, y si yo lo
            hago mal me gusta que me diga por qué y cómo podría mejorarlo.
          </p>
        </Col>
      </Row>
    </Section>
  );
};

export default About;
