import React from "react";

import "./Identity.css";
import { IIdentity } from "../../Iinterface";

interface IProps extends IIdentity {}

export const Identity = (props: IProps) => {
  const { nom } = props;

  return <div className="Identity">{nom} </div>;
};
