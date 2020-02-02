import React, { Fragment } from "react";
import { ICollectionOeuvreEcrite } from "../../../Iinterface";

interface IProps extends ICollectionOeuvreEcrite {}

export const CollectionOeuvreEcrite = (props: IProps) => {
  const { oeuvres, nom } = props;

  return (
    <div className={`CollectionOeuvreEcrite`}>
      <div className="row">
        <div className="CollectionOeuvreEcrite__icon" />

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
