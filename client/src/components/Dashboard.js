import React, { Component } from "react";
import styled from "styled-components";

const Dashboard = styled.main`
  padding: 1rem;
`;

export default class DashboardComp extends Component {
  render() {
    return (
      <Dashboard>
        <h1>Dashboard</h1>
      </Dashboard>
    );
  }
}
