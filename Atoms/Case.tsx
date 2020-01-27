import React, { PureComponent } from "react";
import { Card } from "antd";
export interface ICase {
  id: number;
  etatLecture: string;
}

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
