import React from "react";

import "./Don.scss";

interface IProps {
  don: Number;
}

export const Don = (props: IProps) => {
  const { don } = props;
  return <div className="Don">{don} </div>;
};
