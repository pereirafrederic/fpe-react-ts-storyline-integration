export  interface ICase {
  id : number
  etatLecture:EEtatLecture
}

enum EEtatLecture {
  Inconnu = 'INCONNU',
  Connu = 'CONNU',
  EnCours = 'EN_COURS',
  Lu = 'LU',
}