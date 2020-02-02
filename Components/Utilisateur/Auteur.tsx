import React, { Component } from "react";
import { IAuteur } from "../../Iinterface";
import { Identite } from "../Identite";

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
        {presentation && (
          <div className="Auteur__Presentation">
            {presentation && presentation.titre && (
              <div className="Auteur__Presentation__titre">
                {presentation.titre}
              </div>
            )}
            {presentation && presentation.sousTitre && (
              <div className="Auteur__Presentation__sousTitre">
                {presentation.sousTitre}
              </div>
            )}
            {presentation && presentation.description && (
              <div className="Auteur__Presentation__description">
                {presentation.description}
              </div>
            )}
          </div>
        )}
        <div className="Livre__Oeuvres">
          {oeuvres && oeuvres.map(oeuvre => <div>{oeuvre.nom}</div>)}
        </div>
        <div className="Livre__Financement">
          {financementsAuteurs && (
            <div className="Livre__Financement__Auteurs">
              {financementsAuteurs.map(financementsAuteur => (
                <div className="Livre__Financement__Auteurs__Don">
                  <div className="Livre__Financement__Auteurs__Don__beneficiaire">
                    {`bénéficiaire : ${financementsAuteur.nom} ${financementsAuteur.prenom}`}
                  </div>
                  <div className="Livre__Financement__Auteurs__Don__dons">
                    {financementsAuteur.dons.map(don => (
                      <div className="Livre__Financement__Auteurs__Don__dons__don">
                        <div className="">{`Don de ${don} €`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {financementsOeuvres && (
            <div className="Livre__Financement__Oeuvre">
              {financementsOeuvres.map(financementsOeuvre => (
                <div />
              ))}
            </div>
          )}
        </div>
        <div className="Livre__Financement_par">
          {financementsParAuteur && (
            <div className="Livre__Financement_par__Auteurs">
              {financementsParAuteur.map(financementParAuteur => (
                <div className="Livre__Financement_par__Auteurs__Don">
                  <div className="Livre__Financement_par__Auteurs__Don__beneficiaire">
                    {`Donateur : ${financementParAuteur.nom} ${financementParAuteur.prenom}`}
                  </div>
                  <div className="Livre__Financement_par__Auteurs__Don__dons">
                    {financementParAuteur.dons.map(don => (
                      <div className="Livre__Financement_par__Auteurs__Don__dons__don">
                        <div className="">{`Don de ${don} €`}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              ))}
            </div>
          )}
          {financementsParLecteur && (
            <div className="Livre__Financement_par__Lecteurs">
              {financementsParLecteur.map(financementParLecteur => (
                <div />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
