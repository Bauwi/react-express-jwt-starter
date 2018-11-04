import React, { Component } from "react";
import styled from "styled-components";

const Header = styled.header`
  align-items: center;
  display: flex;
  height: 10vh;
  padding: 0 1rem;
`;

export default class PublicHeader extends Component {
  render() {
    return (
      <Header>
        <h1>Starter</h1>
      </Header>
    );
  }
}
