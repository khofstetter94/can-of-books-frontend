import React from 'react';
import NewBookForm from './NewBookForm';

class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revealNewBookForm: false
    };
  }

  buttonClick = () => {
    this.setState({revealNewBookForm: true});
  }

  formSubmit = () => {
    this.setState({revealNewBookForm: false});
  }

  render() {
    return (
      <div>
        <NewBookForm
          show={this.state.revealNewBookForm}
          handleClose={this.formSubmit}
          getBooks={this.props.getBooks}
          postBook = {this.props.postBook}
        />
        <button class="mt-5"onClick={this.buttonClick}>Add book</button>
      </div>
    );
  }
}

export default AddBook;
