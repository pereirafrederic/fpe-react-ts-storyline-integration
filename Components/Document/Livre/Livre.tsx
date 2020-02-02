import React, { Component } from "react";
import { ILivre } from "../../../Iinterface";
import { Identite } from "../../Identite";
import { Note } from "./Note";

interface IProps extends ILivre {}

interface IState {}

export default class Livre extends Component<IProps, IState> {
  render() {
    const { auteur, nom, contenu, lecteurs, note, thematique } = this.props;

    return (
      <div className="Livre">
        <Identite nom={nom} />
        <Identite nom={auteur.nom} />
        <Note note={note} />
        <div className="Livre__Thematiques">
          {thematique &&
            thematique.map(thematique => <div>{thematique.nom}</div>)}
        </div>
        <div className="Livre__Contenu">{contenu}</div>
        <div className="Livre__lecteurs">
          {lecteurs && lecteurs.map(lecteur => <div>{lecteur.nom}</div>)}
        </div>
      </div>
    );
  }
}
