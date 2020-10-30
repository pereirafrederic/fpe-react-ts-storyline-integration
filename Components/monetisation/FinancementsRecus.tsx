import React, { Component } from "react";
import { IFinancementsRecus } from "../../Iinterface";

interface IProps extends IFinancementsRecus {}

interface IState {}

export default class FinancementsRecus extends Component<IProps, IState> {
  render() {
    const { financementsParAuteur, financementsParLecteur } = this.props;

    return (
      <div className="FinancementsRecus">
        {financementsParAuteur && (
          <div className="FinancementsRecus__financementsParAuteur">
            {financementsParAuteur.map(financementParAuteur => (
              <div className="FinancementsRecus__financementParAuteur">
                <div className="FinancementsRecus__financementParAuteur_beneficiaire">
                  {`Donateur autre Auteur : ${financementParAuteur.nom} ${financementParAuteur.prenom}`}
                </div>
                <div className="FinancementsRecus__financementParAuteur_dons">
                  <h3>Dons</h3>
                  {financementParAuteur.dons &&
                    financementParAuteur.dons.map(don => (
                      <div className="FinancementsRecus__financementParAuteur_Dons_don">
                        <div className="">{`Don de ${don} €`}</div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {financementsParLecteur && (
          <div className="FinancementsRecus__financementsParLecteur">
            {financementsParLecteur.map(financementParLecteur => (
              <div className="FinancementsRecus__financementParLecteur">
                <div className="FinancementsRecus__financementParLecteur_beneficiaire">
                  {`Donateur lecteur: ${financementParLecteur.nom} ${financementParLecteur.prenom}`}
                </div>
                <div className="FinancementsRecus__financementParLecteur_dons">
                  <h3>Dons</h3>
                  {financementParLecteur.dons &&
                    financementParLecteur.dons.map(don => (
                      <div className="FinancementsRecus__financementParLecteur_Dons_don">
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
