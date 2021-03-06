import React from 'react';
import axios from 'axios';
import { Carousel, Image, Button } from 'react-bootstrap';
import AddBook from './AddBook';
import './BestBooks.css';
import UpdateBook from './UpdateBook';
// import About from './About.js';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try {
      let results = await axios.get(`${process.env.REACT_APP_SERVER}/books`)
      this.setState({
        books: results.data,
      })
      console.log(this.state.books)
    } catch (error) {
      this.setState({
        bookErrorMessage: `An error occured: ${error.response.status}, ${error.response.data}`
      })
    }
  }

  postBook = async (newBookObj) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let newBook = await axios.post(url, newBookObj);
      this.setState({
        books: [...this.state.books, newBook.data]
      })
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  updateBook = async (bookUpdate) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookUpdate._id}`;
      let updatedBook = await axios.put(url, bookUpdate);
      let updatedBookArray = this.state.books.map(currentBook => {
        return currentBook._id === bookUpdate._id
          ? updatedBook.data
          : currentBook
      });
      this.setState({
        books: updatedBookArray
      });
    } catch (error) {
      console.log('we have an error: ', error.response.data);
    }
  }

  render() {

    /* TODO: render all the books in a Carousel */
    let carouselItems =
      this.state.books.length ? this.state.books.map((book, _id) => (
        <Carousel.Item className="my-carousel-item mt-5" key={book._id}>
          <Image className="d-block item" src={book.img} alt={book.title} />
          <Carousel.Caption class="mt-5"className="caption" variant="dark">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>Available in stores: {book.status ? 'yes' : 'no'} </p>
            <Button variant="danger" onClick={() => this.deleteBook(book._id)}>Delete book</Button>
            <UpdateBook
              getBooks={this.getBooks}
              updateBook = {this.updateBook}
              book={book}
            />
          </Carousel.Caption>

        </Carousel.Item>
      )) : (<h3>No Books Found :</h3>)
    return (
      <>
        <h2>Books From A Favorite Author</h2>
        {/* <Route
              exact path="/about"
              element={<About/>}
            >
        </Route> */}
        <div className='my-carousel'>
          <Carousel>
            {carouselItems}
          </Carousel>
          <AddBook
            getBooks={this.getBooks}
            postBook={this.postBook}
            updateBook={this.updateBook}
          />

        </div>
      </>
    )
  }
}

export default BestBooks;
