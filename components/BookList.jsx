import React from 'react'
import styled from 'styled-components'
import Book from './Book.jsx'

// to be fetched
const books = [{
  "name": "Harry Potter Series",
  "author": "J.K. Rowling",
  "goodReadsRating": "4.62",
  "goodReadsRatingsCount": "1,987,629"
}]

const Wrapper = styled.div`
  width: 65%;
`

class BookList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  
  render() {
  
    return (
      <Wrapper>
        {
          books.map((book, index) => (
            <Book
              key={index}
              index={index+1}
              name={book.name}
              author={book.author}
              rating={book.goodReadsRating}
              rateCount={book.goodReadsRatingsCount}
            />
          ))
        }
      </Wrapper>
    )
  }
}

export default BookList;
