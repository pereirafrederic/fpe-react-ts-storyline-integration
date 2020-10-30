import React, { Component } from "react";
import { IOeuvreEcrite } from "../../../Iinterface";

interface IProps extends IOeuvreEcrite {}

interface IState {}

export default class OeuvreEcrite extends Component<IProps, IState> {
  render() {
    const {} = this.props;

    return <div className="OeuvreEcrite"></div>;
  }
}
