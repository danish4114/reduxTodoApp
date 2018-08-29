import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LinkTodo from './components/link'


class App extends React.Component {
  render() {
    return (
      <div className="container main">
        <LinkTodo />
      </div>
    );
  }
}

export default App;