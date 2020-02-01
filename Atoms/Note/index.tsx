import React from "react";

import "./Note.scss";

interface IProps {
  note: Number;
}

export const Note = (props: IProps) => {
  const { note } = props;

  const classe = note > 0 ? "positif" : note < 0 ? "negatif" : "zero";
  return <div className={`Note ${classe}`}>{note} </div>;
};
