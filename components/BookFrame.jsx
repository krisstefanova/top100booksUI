import React from 'react'
import styled from 'styled-components'

const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid black;
`

const BookDetails = styled.div`
  padding: 10px;
  width: 80%;
  
  h1, h2 {
    margin: 5px;
  }
`
const ReadCheck = styled.div`
  margin: 0px 20px;
`

const BookImg = styled.div`
  border-right: 1px solid black;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  
  img {
    margin: 0px 10px;
  }
`

class BookFrame extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      
    }
  }
  
  render() {
    return (
      <BookWrapper>
        <ReadCheck >
          <input type='checkbox' />
        </ReadCheck>
        <BookImg> 
          <img src='https://images.gr-assets.com/books/1474171184s/136251.jpg' />
        </BookImg>
        <BookDetails>
          <h1>1. Harry Potter Series</h1>
          <h2>by J.K. Rowling</h2>
          <p>Good Reads rating: 4.62</p>
          <p>Good Reads number of ratings 1,987,629</p>
        </BookDetails>
      </BookWrapper>
    )
  }
}

export default BookFrame;
