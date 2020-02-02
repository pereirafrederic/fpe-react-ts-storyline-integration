import React, { ReactNode } from "react";
import { Icon } from "antd";
import "./EtatEcriture.css";
import { EnumEtatEcriture } from "../../Enumeration";
import { IEtatEcriture } from "../../Iinterface";

interface IProps extends IEtatEcriture {
  iconFontSize: string;
}

export const EtatEcriture = (props: IProps) => {
  const { etatEcriture, iconFontSize } = props;
  let logo: ReactNode = null;
  switch (etatEcriture) {
    case EnumEtatEcriture.STORYBOARD:
      logo = (
        <Icon
          type="bulb"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="yellowgreen"
        />
      );
      break;
    case EnumEtatEcriture.SCENARIO:
      logo = (
        <Icon
          type="experiment"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="blue"
        />
      );
      break;
    case EnumEtatEcriture.VERSION:
      logo = (
        <Icon
          type="diff"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="darkgrey"
        />
      );
      break;
    case EnumEtatEcriture.FINAL:
      logo = (
        <Icon
          type="crown"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="goldenrod"
        />
      );
      break;
    case EnumEtatEcriture.ANNULE:
      logo = (
        <Icon
          type="dislike"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="red"
        />
      );
      break;
    default:
      logo = (
        <Icon
          style={{ fontSize: iconFontSize }}
          type="bulb"
          theme="twoTone"
          twoToneColor="red"
        />
      );
  }

  return <div className={`EtatEcriture ${etatEcriture}`}>{logo} </div>;
};
