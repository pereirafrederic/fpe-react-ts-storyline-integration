import React, { ReactNode } from "react";
import { Icon } from "antd";
import "./EtatAcces.scss";
import { EnumAccess } from "../Enumeration";

interface IProps {
  etat: EnumAccess;
}

export const EtatAcces = (props: IProps) => {
  const { etat } = props;

  let logo: ReactNode = null;
  switch (etat) {
    case EnumAccess.AUTORISE_LECTURE:
      logo = <Icon type="eye" />;
      break;
    case EnumAccess.NON_AUTORISE:
      logo = <Icon type="eye-invisible" />;
      break;
    case EnumAccess.AUTORISE_ECRITURE:
      logo = <Icon type="edit" />;
      break;
    default:
      logo = <Icon type="eye-invisible" />;
  }

  return <div className={`EtatAcces ${etat}`}>{logo} </div>;
};
