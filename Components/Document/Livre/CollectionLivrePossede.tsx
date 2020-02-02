import React, { Fragment } from "react";
import { ICollectionLivrePossede } from "../../../Iinterface";

interface IProps extends ICollectionLivrePossede {}

export const CollectionLivrePossedePossede = (props: IProps) => {
  const { livres, nom } = props;
  return (
    <div className={`CollectionLivrePossede`}>
      <div className="row">
        <div className="CollectionLivrePossede__icon" />
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
