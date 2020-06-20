import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

import { startLogout } from 'features/auth/actions';

const PrivateHeader = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.auth.user.username);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <Header>
      <Wrapper>
        <Name>Starter</Name>
        <Utils>
          <Username>{username}</Username>
          <Button shape="circle" onClick={handleLogout}>
            <Icon type="logout" />
          </Button>
        </Utils>
      </Wrapper>
    </Header>
  );
};

export default PrivateHeader;

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
