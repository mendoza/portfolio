import React from 'react';
import { Row } from 'reactstrap';
import Project from '../components/Project';
import Section from '../components/Section';

const Portfolio = () => {
  return (
    <Section id="portfolio" sectionTitle="Portafolio" extra="portfolio">
      <Row>
        <Project
          imgUrl="assets/img/portfolio/cabin.png"
          imgAlt="cabin"
          projectTitle="Skeleton Engine"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
        />
        <Project
          imgUrl="assets/img/portfolio/cake.png"
          imgAlt="cake"
          projectTitle="Arrivo App"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
        />
      </Row>
    </Section>
  );
};

export default Portfolio;
