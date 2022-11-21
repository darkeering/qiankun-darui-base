import 'zone.js/dist/zone';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { registerMicroApps, start } from "qiankun";
import { BrowserRouter } from "react-router-dom";
// qiankun 配置
registerMicroApps([
  {
    name: "rc-child", // 每一个子应用的名字  React应用的名字不重要
    entry: "//localhost:3001", // 子应用的端口 必须一致
    container: "#rc-child", // 子应用在父应用的挂载点
    activeRule: location => location.pathname.startsWith('/rc-child'), // 父应用中激活子应用的规则
  },
  {
    name: "ng-child", // 每一个子应用的名字  React应用的名字不重要
    entry: "//localhost:3002", // 子应用的端口 必须一致
    container: "#rc-child", // 子应用在父应用的挂载点
    activeRule: location => location.pathname.startsWith('/ng-child'), // 父应用中激活子应用的规则
  },
]);
// 启动 父应用
start();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
