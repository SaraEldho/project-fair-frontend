import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function ProfileCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: "18rem", height: "400px" }} onClick={handleShow}>
        <Card.Img
          variant="top"
          src="https://img.lovepik.com/free-png/20210928/lovepik-programmer-png-image_401643778_wh1200.png"
          width={"500px"}
          height={"300px"}
        />
        <Card.Body>
          <Card.Title className="text-center">Project Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img
                src="https://img.lovepik.com/free-png/20210928/lovepik-programmer-png-image_401643778_wh1200.png"
                alt=""
                width={"200px"}
                height={"300px"}
              />
            </div>
            <div className="col-6 ">
              <h3>Project title</h3>
              <p style={{ textAlign: "justify" }}>
                Description:Computer programmers write, test, debug, and
                maintain the detailed instructions, called computer programs,
                that computers must follow to perform their functions.
              </p>
              <p>
                Technology Used:<b>React,Node</b>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between">
            <Button className="me-5">
              <a href="">
                <FaGithub />
              </a>
            </Button>
            <Button className="me-5">
              <a href="">
                <FaLink />
              </a>
            </Button>

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProfileCard;
