import React from "react";
import styled from "styled-components";
import { Collections as iconCollections } from "styled-icons/material";
import "./Note.css";
import { ICollectionOeuvre } from "../Iinterface";

interface IProps extends ICollectionOeuvre {}

export const CollectionOeuvre = (props: IProps) => {
  const { nom, oeuvres } = props;
  const RedCollection = styled(iconCollections)`
    color: red;
  `;
  return (
    <div className={`CollectionOeuvre`}>
      <div className="row">
        <div className="CollectionOeuvre__icon">
          <RedCollection />
        </div>
        <div className="CollectionOeuvre__nom">{nom}</div>
      </div>
      <div className="CollectionOeuvre__livres">
        {oeuvres.map(oeuvre => (
          <div>{oeuvre.nom}</div>
        ))}
      </div>
    </div>
  );
};
