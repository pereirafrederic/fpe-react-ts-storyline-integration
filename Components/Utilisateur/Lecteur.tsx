import React, { Component } from "react";
import { ILecteur } from "../../Iinterface";
import { Identite } from "../Identite";
import Presentation from "./Presentation";
import LivreNote from "../Document/Livre/LivreNote";
import Livre from "../Document/Livre/Livre";
import LivrePossede from "../Document/Livre/LivrePossede";
import FinancementsDonnees from "../monetisation/FinancementsDonnees";
interface IProps extends ILecteur {}

interface IState {}

export default class Lecteur extends Component<IProps, IState> {
  render() {
    const {
      pseudo,
      nom,
      prenom,
      email,
      presentation,
      livresNonNote,
      livresNote,
      souhaits,
      financementsAuteurs,
      financementsOeuvres
    } = this.props;

    return (
      <div className="Lecteur">
        <Identite nom={pseudo} />
        <Identite nom={`${nom} ${prenom} `} />
        <Identite nom={email} />
        <Presentation {...presentation} />

        <div className="Auteur__livresNote">
          {livresNote &&
            livresNote.map(livreNote => <LivreNote {...livreNote} />)}
        </div>
        <div className="Auteur__livresNonNote">
          {livresNonNote &&
            livresNonNote.map(livreNonNote => (
              <LivrePossede {...livreNonNote} />
            ))}
        </div>
        <div className="Auteur__livresNonNote">
          {souhaits && souhaits.map(souhait => <Livre {...souhait} />)}
        </div>
        <FinancementsDonnees
          financementsAuteurs={financementsAuteurs}
          financementsOeuvres={financementsOeuvres}
        />
      </div>
    );
  }
}
