import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

import { startLogout } from 'features/auth/actions';

const Header = styled.nav`
  color: grey;
`;
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 2rem;
`;
const Name = styled.p`
  font-size: 4.6rem !important;
  font-family: 'Lobster Two', cursive !important;
`;
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
          <Name>Starter</Name>
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

const mapStateToProps = (state) => ({
  username: state.auth.user.username,
});

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComp);
