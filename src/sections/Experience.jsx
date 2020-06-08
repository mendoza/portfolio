import React from 'react';
import { Row } from 'reactstrap';
import Section from '../components/Section';
import Work from '../components/Work';

const Experience = () => {
  return (
    <Section sectionTitle="Experiencia" id="experience" extra="portfolio">
      <Row>
        <Work
          imgUrl="img/cabin.png"
          imgAlt="cabin"
          workTitle="Sinewave"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          inicio="Junio 2017"
          fin="~"
          projectUrl="https://sinewave.tech/"
          urlName="globe"
        />

        <Work
          imgUrl="img/cabin.png"
          imgAlt="cake"
          workTitle="Kidan"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          inicio="Abril 2020"
          fin="~"
          projectUrl="https://kidan.dev/"
          urlName="globe"
        />
      </Row>
    </Section>
  );
};

export default Experience;
