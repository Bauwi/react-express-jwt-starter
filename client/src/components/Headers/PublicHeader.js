import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  padding: 2rem;
`;
const Name = styled.p`
  color: grey;
  font-size: 4.6rem !important;
  font-family: "Lobster Two", cursive !important;
  font-weight: 100;
`;

export default class PublicHeader extends Component {
  render() {
    return (
      <Header>
        <Name>Starter</Name>
      </Header>
    );
  }
}
