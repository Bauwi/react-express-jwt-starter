import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { startLogout } from "../actions/auth";

const Header = styled.nav`
  background: black;
  color: grey;
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 0 1rem;
`;
const Name = styled.h1``;
const Utils = styled.div`
  a {
    color: grey;
  }
`;

export class HeaderComp extends Component {
  render() {
    return (
      <Header>
        <Wrapper>
          <Name>Emaily</Name>
          <Utils>
            <button onClick={this.props.startLogout}>logout</button>
          </Utils>
        </Wrapper>
      </Header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HeaderComp);
