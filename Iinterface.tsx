import { EnumEtatLecture, EnumEtatEcriture, EnumAccess } from "./Enumeration";

//parents
interface IID {
  id: number;
  dateCreation: Date;
}

export interface IIdentity extends IID {
  nom: string;
}

export interface IDon {
  don: number;
}

export interface INotation {
  note: number;
}

export interface IEtatLecture {
  etatLecture: EnumEtatLecture;
}
export interface IEtatEcriture {
  etatEcriture: EnumEtatEcriture;
}
export interface IEtatAcces {
  etatAcces: EnumAccess;
}

//Liste

export interface ICollectionLivrePossede extends IIdentity, IEtatLecture {
  livres: ILivrePossede[];
}
export interface ICollectionLivre extends IIdentity, IEtatLecture {
  livres: ILivre[];
}

export interface ICollectionOeuvreEcrite extends IIdentity, IEtatEcriture {
  oeuvres: IOeuvreEcrite[];
}

export interface ICollectionOeuvre extends IIdentity, IEtatEcriture {
  oeuvres: IOeuvre[];
}

interface IGroupeAuteur extends IIdentity {
  auteurs: IAuteur[];
}

//livre à lire

export interface ILivre extends INotation, IIdentity {
  auteur: IAuteur;
  thematique: IThematique[];
  contenu: IContenu2D;
  lecteurs: ILecteur[];
}

interface IContenu2D {
  timeLine: ITime[];
  spaceColumn: IEspace[];
}

interface ITimeElement {
  time: number;
  parent: ITimeElement;
}

interface ITime extends IIdentity {
  time: ITimeElement;
  lectures: IEvenementLivre[];
  ecritures: IEvenementOeuvre[];
}

interface IEspace extends IIdentity {
  lectures: IEvenementLivre[];
  ecritures: IEvenementOeuvre[];
}

interface IEvenementLivre extends INotation, IIdentity {
  time: ITime; // parent
  espace: IEspace; // parent
  contenu: IEssai;
}

interface ILivrePossede extends IEtatLecture, ILivre {}

interface IMagasin {
  auteurs: IAuteur[];
  groupes: IGroupeAuteur[];
  oeuvres: ILivre[];
  collections: ICollectionOeuvreEcrite[];
  thematiques: IThematique[];
}

//Oeuvre à ecrire

export interface IOeuvre extends IEtatEcriture, IIdentity {
  thematique: IThematique[];
  contenu: IContenu2D;
}

interface IEvenementOeuvre extends IEtatEcriture, IIdentity {
  time: ITime; // parent
  espace: IEspace; // parent
  developpement: IDeveloppement;
}

interface IVersionning extends IEtatEcriture {
  numero: number;
}

interface IEssai extends IEtatEcriture {
  contenu: string;
}

interface ITexte extends IVersionning {
  essai1: IEssai; //100
  essai2: IEssai; //200
  essai3: IEssai; // 500
  essai4: IEssai; // 10000
  essai5: IEssai; // 20000
  essai6: IEssai; // 50000
  essai7?: IEssai; // infini
}

interface IVersion extends IVersionning {
  //developpement: IDeveloppement; // parent
  textes: ITexte[];
}

interface IDeveloppement extends IIdentity {
  version: IVersion;
  archives: IVersion[];
}

export interface IOeuvreEcrite extends IEtatEcriture, IOeuvre {}

//utilisateur

interface IUtilisateur extends IIdentity {
  pseudo: string;
  //nom déjà dans identity
  prenom: string;
  email: string;
  password: string;
}

interface ILecteur extends IUtilisateur, IAllFinancements {
  presentation: IPresentation;
  lectures: ILivrePossede[];
  souhaits: ILivre[];
  notation: ILivreNote[];
  accessLivres: IAccessLivre[];
  accessEvenement: IAccessEvenement[];
}

interface IAuteur extends IUtilisateur, IAllFinancements {
  presentation: IPresentation;
  oeuvres: IOeuvreEcrite[];
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

interface IAllFinancements {
  financementsAuteurs: IAuteurFinancement[];
  financementsOeuvres: IOeuvreFinancement[];
}

interface IOeuvreFinancement extends IOeuvre {
  dons: IDon[];
}
interface IAuteurFinancement extends IAuteur {
  dons: IDon[];
}

//notation

interface ILivreNote extends ILivrePossede, INotation {}

//classification

export interface IAuteurThematique extends IAuteur {
  thematiques: IThematique[];
}

export interface IThematique extends IIdentity {
  livres: ILivre[];
}

//access

interface IAccessEvenement extends IEtatLecture, IEtatAcces {
  utilisateur: IUtilisateur;
  evenement: IEvenementLivre;
}

interface IAccessLivre extends IEtatLecture, IEtatAcces {
  utilisateur: IUtilisateur;
  livre: ILivre;
}

interface IAccessTime extends IEtatAcces {
  utilisateur: IUtilisateur;
  espace: ITime;
}

interface IAccessEspace extends IEtatAcces {
  utilisateur: IUtilisateur;
  espace: IEspace;
}
