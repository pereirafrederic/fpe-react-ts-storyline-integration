import React, { Component } from "react";
import { ILivre } from "../../../Iinterface";

interface IProps extends ILivre {}

interface IState {}

export default class LivrePossede extends Component<IProps, IState> {
  render() {
    const {} = this.props;

    return <div className="LivrePossede"></div>;
  }
}
