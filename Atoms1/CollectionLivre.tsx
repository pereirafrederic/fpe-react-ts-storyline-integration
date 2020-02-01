import React, { Fragment } from "react";
import styled from "styled-components";
import { Collections as iconCollections } from "styled-icons/material";
import "./Note.css";
import { ICollectionLivre } from "../Iinterface";

interface IProps extends ICollectionLivre {}

export const CollectionLivre = (props: IProps) => {
  const { livres, nom } = props;
  const RedCollection = styled(iconCollections)`
    color: red;
  `;
  return (
    <div className={`CollectionLivre`}>
      <div className="row">
        <div className="CollectionLivre__icon">
          <RedCollection />
        </div>
        <div className="CollectionLivre__nom">{nom}</div>
      </div>
      <div className="CollectionLivre__livres">
        {livres.map(livre => (
          <Fragment>
            <div>{livre.nom}</div>
            <div>{livre.auteur.nom}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
