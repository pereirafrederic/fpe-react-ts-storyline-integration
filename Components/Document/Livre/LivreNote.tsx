import React, { Component } from "react";
import { ILivreNote } from "../../../Iinterface";

interface IProps extends ILivreNote {}

interface IState {}

export default class LivreNote extends Component<IProps, IState> {
  render() {
    const {} = this.props;

    return <div className="LivreNote"></div>;
  }
}
