import React from 'react'
import styled from 'styled-components'
import styles from './BooksFrame.scss'
import BookList from './BookList.jsx'

const BooksBackground = styled.div`
  display:flex;
  align-items: flex-start;
  justify-content: center;
  width: 987px;
  height: 746px;
  background-image: url("../styles/images/bookshelve.jpg");
`

class BooksFrame extends React.Component {
  render() {
    return (
      <BooksBackground>
        <BookList />
      </BooksBackground>
    )
  }
}

export default BooksFrame;
