import { EnumEtatLecture, EnumEtatEcriture, EnumAccess } from "./Enumeration";


//parents
interface IID {
  id: number;
  dateCreation: Date;
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
  etatLecture: EnumEtatLecture;
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
  oeuvres: IOeuvreEcrit[];
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
  time: ITime;
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

interface ILivreLu extends IEtatLecture {
  livre: ILivre;
}

interface IMagasin {
  auteurs: IAuteur[];
  groupes: IGroupeAuteur[];
  oeuvres: ILivre[];
  collections: ICollectionOeuvre[];
  thematiques: IThematique[];
}

//Oeuvre à ecrire

interface IOeuvre extends IEtatEcriture {
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
  version: IVersion; // parent

  essai1: IEssai; //100
  essai2: IEssai; //200
  essai3: IEssai; // 500
  essai4: IEssai; // 10000
  essai5: IEssai; // 20000
  essai6: IEssai; // 50000
  essai7?: IEssai; // infini
}

interface IVersion extends IVersionning {
  developpement: IDeveloppement; // parent
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
  //nom déjà dans identity
  prenom: string;
  email: string;
  password: string;
}

interface ILecteur extends IAllFinancements {
  utilisateur: IUtilisateur;
  presentation: IPresentation;
  lectures: ILivreLu[];
  souhaits: ILivre[];
  notation: ILivreNote[];
  accessLivres: IAccessLivre[];
  accessEvenement: IAccessEvenement[];
}

interface IAuteur extends IAllFinancements {
  utilisateur: IUtilisateur;
  presentation: IPresentation;
  oeuvres: IOeuvreEcrit[];
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

interface IOeuvreFinancement {
  oeuvre: IOeuvre; // parent
  dons: IFinancement[];
}
interface IAuteurFinancement {
  auteur: IAuteur; // parent
  dons: IFinancement[];
}

//notation

interface ILivreNote extends INotation {
  livre: ILivreLu; //parent
}

//classification

export interface IAuteurThematique extends IAuteur {
  thematiques: IThematique[];
}

export interface IThematique extends IIdentity {
  livres: ILivre[];
}

//access

interface IAccessEvenement extends IEtatLecture, IEtatAccess {
  utilisateur: IUtilisateur;
  evenement: IEvenementLivre;
}

interface IAccessLivre extends IEtatLecture, IEtatAccess {
  utilisateur: IUtilisateur;
  livre: ILivre;
}

interface IAccessTime extends IEtatAccess {
  utilisateur: IUtilisateur;
  espace: ITime;
}

interface IAccessEspace extends IEtatAccess {
  utilisateur: IUtilisateur;
  espace: IEspace;
}
