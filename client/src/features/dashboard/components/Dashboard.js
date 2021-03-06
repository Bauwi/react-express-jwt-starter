import React, { Component } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';

export default class DashboardComp extends Component {
  render() {
    return (
      <Dashboard>
        <Divider orientation="left">
          <h2>Dashboard</h2>
        </Divider>
      </Dashboard>
    );
  }
}

const Dashboard = styled.main`
  padding: 1rem;
`;
