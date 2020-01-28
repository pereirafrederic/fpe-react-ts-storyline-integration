import React, { PureComponent } from "react";

import Case from "./Case";
interface IState {}
interface IProps {}

class Line extends PureComponent<IProps, IState> {
  render() {
    const { line } = this.props;
    return (
      <div className="Line">
        {line.cases.map(value => (
          <Case key={value.id} case={value} />
        ))}
      </div>
    );
  }
}

export default Line;
