import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="m-5 btn btn-light" onClick={handleShow}>
        ADD
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label>
                <input type="file" style={{ display: "none" }} />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTTwdUjrgnbTo0mDqWPz9tQeZBUR8rmSjP3_90QGxUQ&s"
                  height={"275px"}
                />
              </label>
            </div>
            <div className="col-6 text-center">
              <input
                type="text"
                placeholder="Project Name"
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Language Used"
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Github Link"
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Live link"
                className="form-control mb-2"
              />
              <input
                type="text"
                placeholder="Overview"
                className="form-control mb-2"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddProject;
