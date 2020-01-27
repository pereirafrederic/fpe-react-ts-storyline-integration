export enum EnumEtatLecture {
  NON_OUVERT = "NON_OUVERT",
  OUVERT = "OUVERT",
  DEBUTE = "DEBUTE",
  FINI = "FINI"
}
export enum EnumEtatEcriture {
  STORYBOARD = "STORYBOARD",
  SCENARIO = "SCENARIO",
  ALPHA = "ALPHA",
  BETA = "BETA",
  VERSION = "VERSION",
  FINAL = "FINAL"
}
interface IID {
  id: number;
}

interface IIdentity extends IID {
  nom: string;
}

interface IVersionning extends IIdentity {
  numero: number;
  etat: EnumEtatEcriture;
}

export interface ICollectionLivre extends IIdentity {
  livres: ILivre[];
}

export interface ILivre extends IIdentity {
  lines: ITemps[];
  columns: IEspace[];
}

interface IEvenement extends IIdentity {
  temps: ITemps;
  espace: IEspace;
}

interface ITemps extends IIdentity {
  annee: number;
  jour: number;
  evenements: IEvenement[];
}

interface IEspace extends IIdentity {
  evenements: IEvenement[];
}

interface ITexte extends IIdentity {
  version: IVersion;
  ordre: number;

  essai1: string;
  essai2: string;
  essai3: string;
  essai4: string;
  essai5: string;
  essai6: string;
  essai7: string;
}

interface IVersion extends IIdentity {
  developpement: IDeveloppement;
  textes: ITexte[];
}

interface IDeveloppement extends IIdentity {
  version: IVersion;
  archives: IVersion[];
}

interface IUtilisateur extends IIdentity {
  email: string;
  password: string;
  dateInscription: string;
  accessLivres: IAccessLivre[];
  accessEvenement: IAccessEvenement[];
}

interface IAccessEvenement {
  utilisateur: IUtilisateur;
  evenement: IEvenement;
  etat: EnumEtatLecture;
}

interface IAccessLivre {
  utilisateur: IUtilisateur;
  livre: ILivre;
  etat: EnumEtatLecture;
}
