import React from 'react';
import { Row } from 'reactstrap';
import Section from '../components/Section';

const About = () => {
  return (
    <Section sectionTitle="Acerca de mi" id="about" light>
      <Row>
        <div className="col-lg-4 ml-auto">
          <p className="lead">
            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
            the complete source files including HTML, CSS, and JavaScript as well as optional SASS
            stylesheets for easy customization.
          </p>
        </div>
        <div className="col-lg-4 mr-auto">
          <p className="lead">
            You can create your own custom avatar for the masthead, change the icon in the dividers,
            and add your email address to the contact form to make it fully functional!
          </p>
        </div>
      </Row>
      <div className="text-center mt-4">
        <a
          className="btn btn-xl btn-outline-light"
          href="https://startbootstrap.com/themes/freelancer/">
          <i className="fas fa-download mr-2" />
          Free Download!
        </a>
      </div>
    </Section>
  );
};

export default About;
