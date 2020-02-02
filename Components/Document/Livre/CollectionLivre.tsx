import React, { Fragment } from "react";
import { ICollectionLivre } from "../../../Iinterface";

interface IProps extends ICollectionLivre {}

export const CollectionLivre = (props: IProps) => {
  const { livres, nom } = props;
  return (
    <div className={`CollectionLivre`}>
      <div className="row">
        <div className="CollectionLivre__icon" />

        <div className="CollectionLivre__nom">{nom}</div>
      </div>
      <div className="CollectionLivre__livres">
        {livres.map(livre => (
          <Fragment key={livre.id}>
            <div>{livre.nom}</div>
            <div>{livre.auteur.nom}</div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
