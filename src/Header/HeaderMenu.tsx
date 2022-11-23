import { BugOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../withRouter";

class HeaderMenu extends Component<any, any> {
  items: MenuProps["items"] = [
    {
      label: <Link to={"/home"}>Home</Link>,
      key: "/home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/rc-child"}>React DarUI</Link>,
      key: "/rc-child",
      icon: <BugOutlined />,
    },
    {
      label: <Link to={"/ng-child"}>Angular DarUI</Link>,
      key: "/ng-child",
      icon: <BugOutlined />,
    },
  ];
  constructor(props: any) {
    super(props);
    this.state = {
      current: "/home",
    };
  }

  componentDidMount(): void {
    const find = this.items?.find(i => this.props.location.pathname.startsWith(i?.key))
    this.setState({current: find?.key || "/home"})
  }

  onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        theme="dark"
        onClick={this.onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={this.items}
      />
    );
  }
}

export default withRouter(HeaderMenu);