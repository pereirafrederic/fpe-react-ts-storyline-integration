import React from "react";

import { IDon } from "../../Iinterface";

interface IProps extends IDon {}

export const Don = (props: IProps) => {
  const { don } = props;
  return <div className="Don">{`${don} €`} </div>;
};
