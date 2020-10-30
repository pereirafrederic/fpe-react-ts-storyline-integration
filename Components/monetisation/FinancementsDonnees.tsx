import React, { Component } from "react";
import { IFinancementsDonnees } from "../../Iinterface";

interface IProps extends IFinancementsDonnees {}

interface IState {}

export default class FinancementsDonnees extends Component<IProps, IState> {
  render() {
    const { financementsAuteurs, financementsOeuvres } = this.props;

    return (
      <div className="FinancementsDonnees">
        {financementsAuteurs && (
          <div className="FinancementsDonnees__financementsAuteur">
            {financementsAuteurs.map(financementsAuteur => (
              <div className="FinancementsDonnees__financementsAuteur">
                <div className="FinancementsDonnees__financementsAuteur_beneficiaire">
                  {`Auteur bénéficiaire : ${financementsAuteur.nom} ${financementsAuteur.prenom}`}
                </div>
                <div className="FinancementsDonnees__financementsAuteur_dons">
                  <h3>Dons</h3>
                  {financementsAuteur.dons.map(don => (
                    <div className="FinancementsDonnees__financementsAuteur_dons_don">
                      <div className="">{`Don de ${don} €`}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {financementsOeuvres && (
          <div className="FinancementsDonnees__Oeuvre">
            {financementsOeuvres.map(financementsOeuvre => (
              <div className="FinancementsDonnees__financementsOeuvre">
                <div className="FinancementsDonnees__financementsOeuvre_beneficiaire">
                  {`Oeuvre bénéficiaire : ${financementsOeuvre.nom}`}
                </div>
                <div className="FinancementsDonnees__financementsOeuvre_dons">
                  <h3>Dons</h3>
                  {financementsOeuvre.dons.map(don => (
                    <div className="FinancementsDonnees__financementsOeuvre_dons_don">
                      <div className="">{`Don de ${don} €`}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
