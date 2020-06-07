import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SocialIcon from '../components/SocialIcon';

const Footer = () => {
  return (
    <footer className="footer text-center" id="informacion">
      <Container>
        <Row>
          <Col lg="4" className=" mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Residencia</h4>
            <p className="lead mb-0">
              Santa Lucia, Francisco Morazan
              <br />
              Honduras
            </p>
          </Col>
          <Col lg="4" className=" mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Al rededor de la web</h4>
            <SocialIcon name="github" url="https://github.com/dmendoza99" />
            <SocialIcon name="dev" url="https://dev.to/dmendoza99" />
            <SocialIcon
              name="linkedin-in"
              url="https://www.linkedin.com/in/david-mendoza-953039168/"
            />
            <SocialIcon name="twitter" url="https://twitter.com/littlecheese19" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
