import React from 'react';
import styled from 'styled-components';

import Header from '../Header';

function App() {
  return (
    <>
      <Header />
      <p>This is an app made using Parcel!</p>
      <Image alt='Cute bunny' src='/bunny.png' />
    </>
  );
}

const Image = styled.img`
  height: 400px;
  width: 400px;
`;

export default App;
