import React from 'react';
import BooksFrame from './components/BooksFrame';
import styled from 'styled-components';

const SiteFrame = styled.div`
  display: flex;
  justify-content: center;
`

class App extends React.Component {
   render() {
      return (
         <SiteFrame>
            <BooksFrame />
         </SiteFrame>
      );
   }
}

export default App;
