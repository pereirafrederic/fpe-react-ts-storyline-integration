import { EnumEtatLecture, EnumEtatEcriture, EnumAccess } from "./Enumeration";

// Atome
interface IID {
  id: number;
  dateCreation: Date;
}

export interface IIdentite {
  nom: string;
}

export interface IDon {
  don: number;
}

export interface INotation {
  note: number;
}

interface ICoordonneeBancaire {
  rib: string;
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

//

export interface ICollectionLivrePossede extends IID, IIdentite, IEtatLecture {
  livres: ILivrePossede[];
}
export interface ICollectionLivre extends IID, IIdentite, IEtatLecture {
  livres: ILivre[];
}

export interface ICollectionOeuvreEcrite extends IID, IIdentite, IEtatEcriture {
  oeuvres: IOeuvreEcrite[];
}

export interface ICollectionOeuvre extends IID, IIdentite, IEtatEcriture {
  oeuvres: IOeuvre[];
}

export interface IGroupeAuteur extends IID, IIdentite {
  auteurs: IAuteur[];
}

interface IVersionning extends IEtatEcriture {
  numero: number;
}

interface IEssai extends IEtatEcriture {
  contenu: string;
}

interface IVersion extends IID, IVersionning {
  //developpement: IDeveloppement; // parent
  textes: ITexte[];
}

//rang 4

export interface ILivre extends IID, INotation, IIdentite {
  auteur: IAuteur;
  thematique: IThematique[];
  contenu: IContenu2D;
  lecteurs: ILecteur[];
}

interface IContenu2D extends IID {
  timeLine: ITime[];
  spaceColumn: IEspace[];
}

interface ITimeElement extends IID {
  time: number;
  parent: ITimeElement;
}

interface ITime extends IIdentite, IID {
  time: ITimeElement;
  lectures: IEvenementLivre[];
  ecritures: IEvenementOeuvre[];
}

interface IEspace extends IIdentite, IID {
  lectures: IEvenementLivre[];
  ecritures: IEvenementOeuvre[];
}

interface IEvenementLivre extends IID, INotation, IIdentite {
  time: ITime; // parent
  espace: IEspace; // parent
  contenu: IEssai;
}

export interface ILivrePossede extends IID, IEtatLecture, ILivre {}

export interface IMagasin {
  auteurs: IAuteur[];
  groupes: IGroupeAuteur[];
  oeuvres: ILivre[];
  collections: ICollectionOeuvreEcrite[];
  thematiques: IThematique[];
}

//Oeuvre à ecrire

export interface IOeuvre extends IID, IIdentite {
  thematique: IThematique[];
  contenu: IContenu2D;
}

interface IEvenementOeuvre extends IID, IEtatEcriture, IIdentite {
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

interface ITexte extends IID, IVersionning {
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

interface IDeveloppement extends IID, IIdentite {
  version: IVersion;
  archives: IVersion[];
}

export interface IOeuvreEcrite extends IEtatEcriture, IOeuvre {}

//utilisateur

interface IUtilisateur extends IID, IIdentite {
  pseudo: string;
  //nom déjà dans identity
  prenom: string;
  email: string;
  password: string;
}

interface ILecteur
  extends IUtilisateur,
    IFinancementsDonnees,
    IFinancementsRecus {
  presentation: IPresentation;
  lectures: ILivrePossede[];
  souhaits: ILivre[];
  notation: ILivreNote[];
  accessLivres: IAccessLivre[];
  accessEvenement: IAccessEvenement[];
}

export interface IAuteur
  extends IUtilisateur,
    IFinancementsDonnees,
    IFinancementsRecus {
  presentation: IPresentation;
  oeuvres: IOeuvreEcrite[];
  coordonneeBancaire: ICoordonneeBancaire;
}

export interface IPresentation {
  titre: string;
  sousTitre: string;
  description: string;
}

//financement

export interface IFinancementsDonnees {
  financementsAuteurs: IAuteurFinancement[];
  financementsOeuvres: IOeuvreFinancement[];
}

export interface IFinancementsRecus {
  financementsParLecteur: IFinancementParLecteur[];
  financementsParAuteur: IAuteurFinancement[];
}

interface IOeuvreFinancement extends IOeuvre {
  dons: IDon[];
}
interface IAuteurFinancement extends IAuteur {
  dons: IDon[];
}
interface IFinancementParLecteur extends ILecteur {
  dons: IDon[];
}

//notation

export interface ILivreNote extends ILivrePossede, INotation {}

//classification

export interface IAuteurThematique extends IAuteur {
  thematiques: IThematique[];
}

export interface IThematique extends IIdentite {
  livres: ILivre[];
}

//access

export interface IAccessEvenement extends IID, IEtatLecture, IEtatAcces {
  utilisateur: IUtilisateur;
  evenement: IEvenementLivre;
}

export interface IAccessLivre extends IID, IEtatLecture, IEtatAcces {
  utilisateur: IUtilisateur;
  livre: ILivre;
}

export interface IAccesTime extends IID, IEtatAcces {
  utilisateur: IUtilisateur;
  espace: ITime;
}

export interface IAccesEspace extends IID, IEtatAcces {
  utilisateur: IUtilisateur;
  espace: IEspace;
}
