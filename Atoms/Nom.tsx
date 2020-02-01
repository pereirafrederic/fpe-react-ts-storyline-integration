import React from "react";

import "./Nom.scss";

interface IProps {
  nom: String;
}

export const Nom = (props: IProps) => {
  const { nom } = props;

  return <div className="Nom">{nom} </div>;
};
