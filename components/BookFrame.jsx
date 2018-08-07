import React from 'react'
import styled from 'styled-components'
import styles from './BookFrame.scss'

const BooksBackground = styled.div`
  display:flex;
  align-items: flex-start;
  justify-content: center;
  width: 987px;
  height: 746px;
  background-image: url("../styles/images/bookshelve.jpg")
`

const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  background: #212121;
  justify-content: center;
  width: 65%;
  border: 1px solid black;
  font: "RobotoDraft", sans-serif;
  color: #fff;
  margin-top: 12px;
`

const BookDetails = styled.div`
  border-left: 1px solid black;
  padding: 10px;
  width: 80%;
  
  h1, h2 {
    margin: 5px;
  }
`
const ReadCheck = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  
  input[type="checkbox"]{
    display: none;
  }
`
const BookImg = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  
  img {
    margin: 0 10px;
    width: 75px;
    height: 107px;
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
      <BooksBackground>
        <BookWrapper>
          <ReadCheck>
            <div>
              <input id='one' type='checkbox' />
              <label for='one'>
                <span></span>
              </label>
            </div>
          </ReadCheck>
          
          <BookDetails>
            <h1>1. Harry Potter Series</h1>
            <h2>by J.K. Rowling</h2>
            <p>Good Reads rating: 4.62</p>
            <p>Good Reads number of ratings 1,987,629</p>
          </BookDetails>
          <BookImg> 
            <img src='https://images.gr-assets.com/books/1474171184s/136251.jpg' />
          </BookImg>
        </BookWrapper>
      </BooksBackground>
    )
  }
}

export default BookFrame;
