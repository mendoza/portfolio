import React from 'react';
import { Row, Col } from 'reactstrap';
import Section from '../components/Section';

const Technologies = () => {
  return (
    <Section sectionTitle="Tecnologias" id="technologies">
      <Row>
        <Col>
          <span className="badge badge-pill badge-primary">SQL</span>
          <span className="badge badge-pill badge-primary">NoSQL</span>
          <span className="badge badge-pill badge-primary">React</span>
          <span className="badge badge-pill badge-primary">React Native (Expo)</span>
          <span className="badge badge-pill badge-primary">Python</span>
          <span className="badge badge-pill badge-primary">NodeJs</span>
          <span className="badge badge-pill badge-primary">Firebase</span>
          <span className="badge badge-pill badge-primary">Linux</span>
          <span className="badge badge-pill badge-primary">Git</span>
          <span className="badge badge-pill badge-primary">Raspberry pi</span>
        </Col>
      </Row>
    </Section>
  );
};

export default Technologies;
