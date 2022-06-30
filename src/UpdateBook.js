import React from 'react';
import UpdateBookForm from './UpdateBookForm';
import { Button } from 'react-bootstrap';

class UpdateBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealUpdateBookForm: false
    };
  }

  buttonClick = () => {
    this.setState({revealUpdateBookForm: true});
  }

  formSubmit = () => {
    this.setState({revealUpdateBookForm: false});
  }

  render() {
    return (
      <>
        <UpdateBookForm
          show={this.state.revealUpdateBookForm}
          handleClose={this.formSubmit}
          getBooks={this.props.getBooks}
          updateBook = {this.props.updateBook}
          book={this.props.book}
      />
        <Button onClick={this.buttonClick} type="submit" variant="primary">Update book</Button>
      </>
    );
  }
}

export default UpdateBook;
