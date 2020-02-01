import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import "./style.css";
import { ILivre } from "./Iinterface";
import { Don } from "./Atoms/Don";
import { Identity } from "./Atoms/Identity";
import { Note } from "./Atoms/Note";
import { EtatAcces } from "./Atoms/EtatAcces";
import { EnumAccess, EnumEtatLecture, EnumEtatEcriture } from "./Enumeration";
import { EtatLecture } from "./Atoms/EtatLecture";
import { EtatEcriture } from "./Atoms/EtatEcriture";
import { Divider } from "antd";

interface AppProps {}
interface AppState {
  livre: ILivre;
  iconFontSize: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      livre: null,
      iconFontSize: "40px"
    };
  }

  render() {
    const { livre, iconFontSize } = this.state;
    return (
      <Fragment>
        <Don don={0} />
        <Divider />
        <Identity nom="frederic" />
        <Divider />
        <Note note={12} />
        <Divider />
        <div className="row">
          <EtatAcces
            etatAcces={EnumAccess.NON_AUTORISE}
            iconFontSize={iconFontSize}
          />
          <EtatAcces
            etatAcces={EnumAccess.AUTORISE_LECTURE}
            iconFontSize={iconFontSize}
          />
          <EtatAcces
            etatAcces={EnumAccess.AUTORISE_ECRITURE}
            iconFontSize={iconFontSize}
          />
        </div>
        <Divider />
        <div className="row">
          <EtatLecture
            etatLecture={EnumEtatLecture.NON_OUVERT}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.OUVERT}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.DEBUTE}
            iconFontSize={iconFontSize}
          />
          <EtatLecture
            etatLecture={EnumEtatLecture.FINI}
            iconFontSize={iconFontSize}
          />
        </div>
        <Divider />
        <div className="row">
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.STORYBOARD}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.SCENARIO}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.VERSION}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.FINAL}
            iconFontSize={iconFontSize}
          />
          <EtatEcriture
            etatEcriture={EnumEtatEcriture.ANNULE}
            iconFontSize={iconFontSize}
          />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
