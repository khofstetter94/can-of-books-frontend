import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async (e) => {
    e.preventDefault();

    try{
      let results = await axios.get(`${process.env.REACT_APP_server}/books`)
      this.setState({
        books: results,
      })
      console.log(this.state.books)
    } catch (error) {
      this.setState({
      bookErrorMessage: `An error occured: ${error.response.status}, ${error.response.data}`
      })
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
