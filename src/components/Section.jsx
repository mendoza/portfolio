import React from 'react';
import { Container } from 'reactstrap';
import Divider from './Divider';

const Section = ({ sectionTitle, children, light, id, extra }) => {
  return (
    <section
      className={`page-section ${light ? 'text-white bg-primary mb-0' : ''} ${extra || ''}`}
      id={id}>
      <Container>
        <h2
          className={`page-section-heading text-center text-uppercase mb-0 ${
            light ? 'text-white' : 'text-secondary'
          }`}>
          {sectionTitle}
        </h2>
        <Divider light={light} />
        {children}
      </Container>
    </section>
  );
};
export default Section;
