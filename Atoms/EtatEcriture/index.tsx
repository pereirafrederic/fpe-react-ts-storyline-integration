import React, { ReactNode } from "react";
import { Icon } from "antd";
import "./EtatEcriture.scss";
import { EnumEtatEcriture } from "../../Enumeration";

interface IProps {
  etat: EnumEtatEcriture;
}

export const EtatEcriture = (props: IProps) => {
  const { etat } = props;
  let logo: ReactNode = null;
  switch (etat) {
    case EnumEtatEcriture.STORYBOARD:
      logo = <Icon type="bulb" />;
      break;
    case EnumEtatEcriture.SCENARIO:
      logo = <Icon type="experiment" />;
      break;
    case EnumEtatEcriture.VERSION:
      logo = <Icon type="diff" />;
      break;
    case EnumEtatEcriture.FINAL:
      logo = <Icon type="crown" />;
      break;
    case EnumEtatEcriture.ANNULE:
      logo = <Icon type="dislike" />;
      break;
    default:
      logo = <Icon type="bulb" />;
  }

  return <div className={`EtatEcriture ${etat}`}>{logo} </div>;
};
