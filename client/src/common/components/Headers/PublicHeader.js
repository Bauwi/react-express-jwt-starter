import React from 'react';
import styled from 'styled-components';

const PublicHeader = () => {
  return (
    <Header>
      <Name>Starter</Name>
    </Header>
  );
};

export default PublicHeader;

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  padding: 2rem;
`;
const Name = styled.p`
  color: grey;
  font-size: 4.6rem !important;
  font-family: 'Lobster Two', cursive !important;
  font-weight: 100;
`;
