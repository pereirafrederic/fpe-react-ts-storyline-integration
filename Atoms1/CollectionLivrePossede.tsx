import React, { Fragment } from "react";
import styled from "styled-components";
import { Collections as iconCollections } from "styled-icons/material";
import "./Note.css";
import { ICollectionLivrePossede } from "../Iinterface";

interface IProps extends ICollectionLivrePossede {}

export const CollectionLivrePossedePossede = (props: IProps) => {
  const { livres, nom } = props;
  const RedCollection = styled(iconCollections)`
    color: red;
  `;
  return (
    <div className={`CollectionLivrePossede`}>
      <div className="row">
        <div className="CollectionLivrePossede__icon">
          <RedCollection />
        </div>
        <div className="CollectionLivrePossede__nom">{nom}</div>
      </div>
      <div className="CollectionLivrePossede__livres">
        {livres.map(livre => (
          <Fragment>
            <div>{livre.nom}</div>
            <div>{livre.etatLecture}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
