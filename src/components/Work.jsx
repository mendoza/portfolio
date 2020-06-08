/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Col, Container, Row, Modal, ModalBody } from 'reactstrap';
import SocialIcon from './SocialIcon';
import Divider from './Divider';

const Work = ({
  imgUrl,
  imgAlt,
  workTitle,
  jobDescription,
  urlName,
  projectUrl,
  brand,
  inicio,
  fin,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Col md="6" lg="4" className="mb-5">
      <div className="portfolio-item mx-auto" onClick={() => setOpen(true)}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <h2
              className={`page-section-heading text-center text-uppercase mb-0 text-white
              `}>
              {workTitle}
            </h2>
          </div>
        </div>
        <img className="img-fluid" src={imgUrl} alt={imgAlt} />
      </div>
      <Modal className="portfolio-modal" fade isOpen={open} backdrop>
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button className="close" type="button" onClick={() => setOpen(false)}>
              <span aria-hidden="true">
                <i className="fas fa-times" />
              </span>
            </button>
            <ModalBody className="text-center">
              <Container>
                <Row className="justify-content-center">
                  <Col lg="8">
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      {workTitle}
                    </h2>
                    <Divider />
                    <p className="mb-5">
                      <b>Inicio: </b>
                      {inicio}
                      <br />
                      <b>Fin: </b>
                      {fin}
                      <br />
                      <b>Descripcion: </b>
                      {jobDescription}
                    </p>
                    {urlName && projectUrl ? (
                      <SocialIcon name={urlName} url={projectUrl} brand={brand} />
                    ) : null}
                  </Col>
                </Row>
              </Container>
            </ModalBody>
          </div>
        </div>
      </Modal>
    </Col>
  );
};

export default Work;
