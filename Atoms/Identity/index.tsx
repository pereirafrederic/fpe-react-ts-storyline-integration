import React from "react";

import "./Identity.scss";

interface IProps {
  nom: String;
}

export const Identity = (props: IProps) => {
  const { nom } = props;

  return <div className="Identity">{nom} </div>;
};
