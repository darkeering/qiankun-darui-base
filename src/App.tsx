import { Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HeaderMenu } from "./Header/HeaderMenu";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ height: "65px" }}>
          <HeaderMenu></HeaderMenu>
        </Header>
        <Content>
          <Routes>
            <Route path="/home"></Route>
          </Routes>
          <div style={{ height: "calc(100vh - 65px)" }}>
            <div id="rc-child"></div>
          </div>
        </Content>
      </Layout>
    );
  }
}
