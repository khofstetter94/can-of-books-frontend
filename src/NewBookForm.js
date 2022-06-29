import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import axios from 'axios';

// let SERVER = process.env.REACT_APP_SERVER;

// Component code credit: https://react-bootstrap.github.io/components/modal/
class NewBookForm extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value === 'true',
      img: e.target.img.value 
    }
    this.props.postBook(newBook);
    this.props.getBooks();
  }





  render() {
    return (<>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Form onSubmit={(e) => {
              this.onSubmit(e);
              this.props.handleClose();
            }}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Movie title"
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Available in stores</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="true / false"
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="img">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>);
  }
}

export default NewBookForm;
