import React, { Component } from "react";
import { render } from "react-dom";

import "./style.scss";
import { ILivre } from "./Iinterface";

interface AppProps {}
interface AppState {
  livre: ILivre;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      livre: null
    };
  }

  render() {
    const { livre } = this.state;
    return <div>{livre}</div>;
  }
}

render(<App />, document.getElementById("root"));
