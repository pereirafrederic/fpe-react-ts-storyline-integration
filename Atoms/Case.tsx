import React, { PureComponent } from "react";
import { ICase } from "./Interfaces";
interface IState {}
interface IProps {
  case: ICase;
}

class Case extends PureComponent<IProps, IState> {
  render() {
    const { id, etatLecture } = this.props.case;
    return (
      <div className="Case" key={id}>
        {etatLecture}
      </div>
    );
  }
}

export default Case;
