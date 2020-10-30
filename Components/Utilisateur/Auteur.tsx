import React, { Component } from "react";
import { IAuteur } from "../../Iinterface";
import { Identite } from "../Identite";
import FinancementsRecus from "../monetisation/FinancementsRecus";
import FinancementsDonnees from "../monetisation/FinancementsDonnees";
import OeuvreEcrite from "../Document/Oeuvre/OeuvreEcrite";
import Oeuvre from "../Document/Oeuvre/Oeuvre";
import Presentation from "./Presentation";
interface IProps extends IAuteur {}

interface IState {}

export default class Auteur extends Component<IProps, IState> {
  render() {
    const {
      pseudo,
      nom,
      prenom,
      email,
      presentation,
      oeuvres,
      oeuvresEcrite,
      financementsAuteurs,
      financementsOeuvres,
      financementsParAuteur,
      financementsParLecteur
    } = this.props;

    return (
      <div className="Auteur">
        <Identite nom={pseudo} />
        <Identite nom={`${nom} ${prenom} `} />
        <Identite nom={email} />
        <Presentation {...presentation} />

        <div className="Auteur__Oeuvres">
          {oeuvres && oeuvres.map(oeuvre => <Oeuvre {...oeuvre} />)}
        </div>
        <div className="Auteur__oeuvresEcrite">
          {oeuvresEcrite &&
            oeuvresEcrite.map(oeuvreEcrite => (
              <OeuvreEcrite {...oeuvreEcrite} />
            ))}
        </div>
        <FinancementsDonnees
          financementsAuteurs={financementsAuteurs}
          financementsOeuvres={financementsOeuvres}
        />
        <FinancementsRecus
          financementsParLecteur={financementsParAuteur}
          financementsParAuteur={financementsParLecteur}
        />
      </div>
    );
  }
}
