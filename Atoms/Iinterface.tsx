export  interface ICase {
  id : number
  etatLecture:EEtatLecture
}

export enum EEtatLecture {
  Inconnu = 'INCONNU',
  Connu = 'CONNU',
  EnCours = 'EN_COURS',
  Lu = 'LU',
}