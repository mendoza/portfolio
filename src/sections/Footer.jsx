import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SocialIcon from '../components/SocialIcon';
// import Section from '../components/Section';

const Footer = () => {
  const actualDate = new Date();
  return (
    <footer className="footer text-center" id="information">
      {/* <Section sectionTitle="informacion" id="information" light extra="text-center"> */}
      <Container>
        <Row>
          <Col lg="6" className=" mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Informacion General</h4>
            <p className="lead mb-0">Residencia: Santa Lucia, Francisco Morazan, Honduras</p>
            <p className="lead mb-0">Estado Civil: Soltero</p>
            <p className="lead mb-0">Buscando Empleo: Siempre busco superarme</p>
            <p className="lead mb-0">
              Edad:
              {` ${actualDate.getFullYear() - new Date('04/05/1999').getFullYear()} años ${
                actualDate.getMonth() === 3 && actualDate.getDate() === 5 ? '✨🎂' : ''
              }`}
            </p>
          </Col>
          <Col lg="6" className=" mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Al rededor de la web</h4>
            <SocialIcon name="github" url="https://github.com/dmendoza99" light brand />
            <SocialIcon name="dev" url="https://dev.to/dmendoza99" light brand />
            <SocialIcon
              name="linkedin-in"
              url="https://www.linkedin.com/in/david-mendoza-953039168/"
              light
              brand
            />
            <SocialIcon name="twitter" url="https://twitter.com/littlecheese19" light brand />
          </Col>
        </Row>
      </Container>
      {/* </Section> */}
    </footer>
  );
};

export default Footer;
