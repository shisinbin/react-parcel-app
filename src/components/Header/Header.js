import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Heading>Hello, World!</Heading>
    </Wrapper>
  );
}

const Wrapper = styled.header``;
const Heading = styled.h1``;

export default Header;
