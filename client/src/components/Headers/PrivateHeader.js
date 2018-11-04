import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Icon from "antd/lib/icon";
import Button from "antd/lib/button";

import { startLogout } from "../../actions/auth";

const Header = styled.nav`
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
  align-items: center;
  display: flex;
`;
const Username = styled.p`
  margin-right: 1rem;
`;

export class HeaderComp extends Component {
  render() {
    return (
      <Header>
        <Wrapper>
          <Name>Starter React Express JWT</Name>
          <Utils>
            <Username>{this.props.username}</Username>
            <Button shape="circle" onClick={this.props.startLogout}>
              <Icon type="logout" />
            </Button>
          </Utils>
        </Wrapper>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.user.username
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComp);
