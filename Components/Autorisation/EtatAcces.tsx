import React, { ReactNode } from "react";
import { Icon } from "antd";
import { EnumAccess } from "../../Enumeration";
import { IEtatAcces } from "../../Iinterface";

interface IProps extends IEtatAcces {
  iconFontSize: string;
}

export const EtatAcces = (props: IProps) => {
  const { etatAcces, iconFontSize } = props;

  let logo: ReactNode = null;
  switch (etatAcces) {
    case EnumAccess.AUTORISE_LECTURE:
      logo = (
        <Icon type="eye" style={{ fontSize: iconFontSize }} theme="twoTone" />
      );
      break;
    case EnumAccess.NON_AUTORISE:
      logo = (
        <Icon
          type="eye-invisible"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="orange"
        />
      );
      break;
    case EnumAccess.AUTORISE_ECRITURE:
      logo = (
        <Icon
          type="edit"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="indigo"
        />
      );
      break;
    default:
      logo = (
        <Icon
          type="eye-invisible"
          style={{ fontSize: iconFontSize }}
          theme="twoTone"
          twoToneColor="limegreen"
        />
      );
  }

  return <div className={`EtatAcces`}>{logo} </div>;
};
