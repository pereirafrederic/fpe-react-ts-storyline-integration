import React, { Component } from "react";
import { IOeuvre } from "../../../Iinterface";

interface IProps extends IOeuvre {}

interface IState {}

export default class Oeuvre extends Component<IProps, IState> {
  render() {
    const {} = this.props;

    return <div className="Oeuvre"></div>;
  }
}
