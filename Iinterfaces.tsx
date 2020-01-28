//enumerateur

export enum EnumAccess {
  NON_AUTORISE = "NON_AUTORISE",
  AUTORISE_LECTURE = "AUTORISE_LECTURE"
}

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
  FINAL = "FINAL",
  ANNULE = "ANNULE"
}

//parents
interface IID {
  id: number;
}

interface IIdentity extends IID {
  nom: string;
}

interface IFinancement {
  don: number;
}

interface INotation {
  note: number;
}

interface IEtatLecture {
  etatLEcture: EnumEtatLecture;
}
interface IEtatEcriture {
  etatEcriture: EnumEtatEcriture;
}
interface IEtatAccess {
  etatAccess: EnumAccess;
}

//Liste

export interface ICollectionLivre extends IIdentity, IEtatLecture {
  livres: ILivre[];
}

interface ICollectionOeuvre extends IIdentity, IEtatEcriture {
  oeuvres: IOeuvre[];
}

interface IGroupeAuteur extends IIdentity {
  auteurs: IAuteur[];
}

//livre à lire

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

interface IOeuvreLU extends IEtatLecture {
  oeuvre: IOeuvre;
}

interface IMagasin {
  auteurs: IAuteur[];
  oeuvres: IOeuvre[];
  collections: ICollectionOeuvre[];
  thematiques: IThematique[];
}

//Oeuvre à ecrire

interface IVersionning extends IIdentity {
  numero: number;
  etat: EnumEtatEcriture;
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
  essai7?: string;
}

interface IVersion extends IIdentity {
  developpement: IDeveloppement;
  textes: ITexte[];
}

interface IDeveloppement extends IIdentity {
  version: IVersion;
  archives: IVersion[];
}

interface IOeuvreEcrit extends IEtatEcriture {
  oeuvre: IOeuvre;
}

//utilisateur

interface IUtilisateur extends IIdentity {
  pseudo: string;
  nom: string;
  prenom: string;
  email: string;
  password: string;
  dateInscription: string;
  accessLivres: IAccessLivre[];
  accessEvenement: IAccessEvenement[];
}

interface ILecteur extends IUtilisateur {
  presentation: IPresentation;
  finacementsAuteurs: IAuteurFinancement[];
  finacementsOeuvres: IOeuvreFinancement[];
  lectures: IOeuvre[];
  souhaits: IOeuvre[];
  notation: IOeuvreNote[];
}

interface IAuteur extends IUtilisateur {
  presentation: IPresentation;
  oeuvres: IOeuvre[];
  coordonneeBancaire: ICoordonneeBancaire;
}

interface IPresentation {
  titre: string;
  sousTitre: string;
  description: string;
}

//financement

interface ICoordonneeBancaire {
  rib: string;
}

interface IOeuvreFinancement {
  oeuvre: IOeuvre;
  dons: IFinancement[];
}
interface IAuteurFinancement {
  auteur: IAuteur;
  dons: IFinancement[];
}

//notation

interface IOeuvreNote extends INotation {
  oeuvre: IOeuvre;
}

//classification

export interface IAuteurThematique extends IAuteur {
  thematiques: IThematique[];
}

export interface IThematique extends IIdentity {
  oeuvres: IOeuvre[];
}

export interface IOeuvre extends IIdentity {
  auteur: IAuteur;
  thematique: IThematique;
}

//access

interface IAccessEvenement extends IEtatLecture, IEtatAccess {
  utilisateur: IUtilisateur;
  evenement: IEvenement;
}

interface IAccessLivre extends IEtatLecture, IEtatAccess {
  utilisateur: IUtilisateur;
  livre: ILivre;
}
