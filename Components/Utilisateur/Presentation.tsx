import React, { Component } from "react";
import { IPresentation } from "../../Iinterface";

interface IProps extends IPresentation {}

interface IState {}

export default class Presentation extends Component<IProps, IState> {
  render() {
    const { titre, sousTitre, description } = this.props;

    return (
      <div className="Presentation">
        {titre && <div className="Presentation__titre">{titre}</div>}
        {sousTitre && (
          <div className="Presentation__sousTitre">{sousTitre}</div>
        )}
        {description && (
          <div className="Presentation__description">{description}</div>
        )}
      </div>
    );
  }
}
