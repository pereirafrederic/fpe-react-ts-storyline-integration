import React, { ReactNode } from "react";
import { Icon } from "antd";

import { EnumEtatLecture } from "../../Enumeration";

interface IProps {
  etat: EnumEtatLecture;
}

export const EtatLecture = (props: IProps) => {
  const { etat } = props;
  let logo: ReactNode = null;
  switch (etat) {
    case EnumEtatLecture.NON_OUVERT:
      logo = <Icon type="book" />;
      break;
    case EnumEtatLecture.OUVERT:
      logo = <Icon type="file-exclamation" />;
      break;
    case EnumEtatLecture.DEBUTE:
      logo = <Icon type="read" />;
      break;
    case EnumEtatLecture.FINI:
      logo = <Icon type="check-square" />;
      break;
    default:
      logo = <Icon type="book" />;
  }

  return <div className={`EtatLecture ${etat}`}>{logo} </div>;
};
