import React from 'react';
import BookFrame from './components/BookFrame';
import styled from 'styled-components';

const SiteFrame = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component {
   render() {
      return (
         <SiteFrame>
            <BookFrame />
         </SiteFrame>
      );
   }
}

export default App;
