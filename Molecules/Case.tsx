import React, { PureComponent, ReactNode } from "react";
import { Card } from "antd";
import { ICase } from "./Iinterface";
interface IState {}
interface IProps {
  case: ICase;
}

class Case extends PureComponent<IProps, IState> {
  render() {
    const { id, etatLecture } = this.props.case;
    return (
      <div className="Case">
        <Card title={id} style={{ width: 300 }}>
          {etatLecture}
        </Card>
      </div>
    );
  }
}

export default Case;
