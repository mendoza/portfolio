import React from 'react';
import { Row } from 'reactstrap';
import Project from '../components/Project';
import Section from '../components/Section';

const Portfolio = () => {
  return (
    <Section id="portfolio" sectionTitle="Portafolio" extra="portfolio">
      <Row>
        <Project
          imgUrl="img/game.png"
          imgAlt="cabin"
          projectTitle="Skeleton Engine"
          projectDescription="Game Engine hecho desde 0 con C++, lua y SFML que utiliza unas librerías para manejar las entidades, el estado de lua."
          projectUrl="https://github.com/Dmendoza99/Skeleton-Engine"
          brand
          urlName="github"
        />
        <Project
          imgUrl="img/cabin.png"
          imgAlt="cake"
          projectTitle="Arrivo App"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          projectUrl="https://arrivoapp.com/"
          urlName="globe"
        />
        <Project
          imgUrl="img/cabin.png"
          imgAlt="cake"
          projectTitle="Scott Pilgrim Scrape"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          projectUrl="https://github.com/Dmendoza99/SP-Scrapped-Comics"
          brand
          urlName="github"
        />
        <Project
          imgUrl="img/cabin.png"
          imgAlt="cake"
          projectTitle="Hondu Pos"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          projectUrl="https://github.com/Dmendoza99/HonduPOS"
          brand
          urlName="github"
        />
        <Project
          imgUrl="img/cabin.png"
          imgAlt="cake"
          projectTitle="Las Santas Ventas"
          projectDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque
            assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore
            quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur
            itaque. Nam."
          projectUrl="https://github.com/Dmendoza99/LasSantasVentas"
          urlName="github"
        />
      </Row>
    </Section>
  );
};

export default Portfolio;
