/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Col, Container, Row, Modal, ModalBody } from 'reactstrap';
import Divider from './Divider';

const Project = ({ imgUrl, imgAlt, projectTitle, projectDescription }) => {
  const [open, setOpen] = useState(false);
  return (
    <Col md="6" lg="4" className="mb-5">
      <div className="portfolio-item mx-auto" onClick={() => setOpen(true)}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="portfolio-item-caption-content text-center text-white">
            <i className="fas fa-plus fa-3x" />
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
                      {projectTitle}
                    </h2>
                    <Divider />
                    <p className="mb-5">{projectDescription}</p>
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

export default Project;
