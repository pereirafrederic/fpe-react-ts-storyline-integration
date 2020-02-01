import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import "./style.scss";
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
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      livre: null
    };
  }

  render() {
    const { livre } = this.state;
    return (
      <Fragment>
        <Don don={0} />
        <Divider />
        <Identity nom="frederic" />
        <Divider />
        <Note note={12} />
        <Divider />
        <div className="row">
          <EtatAcces etat={EnumAccess.NON_AUTORISE} />
          <EtatAcces etat={EnumAccess.AUTORISE_LECTURE} />
          <EtatAcces etat={EnumAccess.AUTORISE_ECRITURE} />
        </div>
        <Divider />
        <div className="row">
          <EtatLecture etat={EnumEtatLecture.NON_OUVERT} />
          <EtatLecture etat={EnumEtatLecture.OUVERT} />
          <EtatLecture etat={EnumEtatLecture.DEBUTE} />
          <EtatLecture etat={EnumEtatLecture.FINI} />
        </div>
        <Divider />
        <div className="row">
          <EtatEcriture etat={EnumEtatEcriture.STORYBOARD} />
          <EtatEcriture etat={EnumEtatEcriture.SCENARIO} />
          <EtatEcriture etat={EnumEtatEcriture.VERSION} />
          <EtatEcriture etat={EnumEtatEcriture.FINAL} />
          <EtatEcriture etat={EnumEtatEcriture.ANNULE} />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
