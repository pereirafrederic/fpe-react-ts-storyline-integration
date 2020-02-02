import React from "react";

import { IIdentite } from "../Iinterface";

interface IProps extends IIdentite {}

export const Identite = (props: IProps) => {
  const { nom } = props;

  return <div className="Identity">{nom} </div>;
};
