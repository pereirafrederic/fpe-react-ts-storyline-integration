import React, { Fragment } from "react";
import styled from "styled-components";
import { Collections as iconCollections } from "styled-icons/material";
import "./Note.css";
import { ICollectionOeuvreEcrite } from "../Iinterface";

interface IProps extends ICollectionOeuvreEcrite {}

export const CollectionOeuvreEcrite = (props: IProps) => {
  const { oeuvres, nom } = props;
  const RedCollection = styled(iconCollections)`
    color: red;
  `;
  return (
    <div className={`CollectionOeuvreEcrite`}>
      <div className="row">
        <div className="CollectionOeuvreEcrite__icon">
          <RedCollection />
        </div>
        <div className="CollectionOeuvreEcrite__nom">{nom}</div>
      </div>
      <div className="CollectionOeuvreEcrite__livres">
        {oeuvres.map(oeuvre => (
          <Fragment>
            <div>{oeuvre.nom}</div>
            <div>{oeuvre.etatEcriture}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
