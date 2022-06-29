import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let bookUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      _id: this.props.book._id,
      __v: this.props.book.__v
    }
    this.props.updateBook(bookUpdate);
  }

  render() {
    return (<>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Form onSubmit={(e) => {
              this.onSubmit(e);
              this.props.handleClose();
            }}>
          <Modal.Header closeButton>
            <Modal.Title>Update Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.book.title}
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.book.description}
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Available in stores</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.book.status}
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="img">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={this.props.book.img}
                  autoFocus
                />
              </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Update book
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>);
  }    
}

export default UpdateBookForm;