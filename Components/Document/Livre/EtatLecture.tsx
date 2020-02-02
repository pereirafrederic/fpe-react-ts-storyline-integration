import React, { ReactNode } from "react";
import { Icon } from "antd";

import { EnumEtatLecture } from "../../../Enumeration";

import { IEtatLecture } from "../../../Iinterface";

interface IProps extends IEtatLecture {
  iconFontSize: string;
}
export const EtatLecture = (props: IProps) => {
  const { etatLecture, iconFontSize } = props;
  let logo: ReactNode = null;
  switch (etatLecture) {
    case EnumEtatLecture.NON_OUVERT:
      logo = (
        <Icon
          type="book"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="maroon"
        />
      );
      break;
    case EnumEtatLecture.OUVERT:
      logo = (
        <Icon
          type="file-exclamation"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="lightcoral"
        />
      );
      break;
    case EnumEtatLecture.DEBUTE:
      logo = (
        <Icon
          type="read"
          style={{ fontSize: iconFontSize, color: "lightseagreen" }}
          theme="outlined"
        />
      );
      break;
    case EnumEtatLecture.FINI:
      logo = (
        <Icon
          type="check-square"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="green"
        />
      );
      break;
    default:
      logo = (
        <Icon
          type="book"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="blue"
        />
      );
  }

  return <div className={`EtatLecture ${etatLecture}`}>{logo} </div>;
};
