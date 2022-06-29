import React from 'react';
import axios from 'axios';
import { Carousel, Image } from 'react-bootstrap';
import AddBook from './AddBook';
import './BestBooks.css';
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

  render() {

    /* TODO: render all the books in a Carousel */
    let carouselItems =
      this.state.books.length ? this.state.books.map((book, _id) => (
        <Carousel.Item className="my-carousel-item" key={book._id}>
          <Image className="d-block item" src={book.img} alt={book.title} />
          <Carousel.Caption className="caption">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>Available in stores: {book.status ? 'yes' : 'no'} </p>
          </Carousel.Caption>
        </Carousel.Item>
      )) : (<h3>No Books Found :</h3>)
    return (
      <>
        <h2>Books From A Favorite Author &amp; Book Shelf</h2>
        {/* <Route
              exact path="/about"
              element={<About/>}
            >
        </Route> */}
        <div className='my-carousel'>
          <Carousel>
            {carouselItems}
          </Carousel>
          <AddBook getBooks={this.getBooks} />
        </div>
      </>
    )
  }
}

export default BestBooks;
