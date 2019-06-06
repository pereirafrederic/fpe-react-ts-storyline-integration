import { mdiEyeSettings, mdiEye, mdiEyeCheck, mdiEyePlus, mdiAccount, mdiEyeOff, mdiBookOpen, mdiBookOpenVariant } from '@mdi/js'

export  interface ICase {
  id : number
  etatLecture:EEtatLecture
  typeRecit: ETypeRecit
}

export  interface IHeaderCase {
  title : string
}

export enum ETypeRecit {
  PointOfView = 'POINT_OF_VIEW',
  Tome = 'TOME',
  Chapiter = 'CHAPITER',
}


export const TypeRecitMdi:IEtatLectureeMdi =  {
  [ETypeRecit.PointOfView] : mdiEyeOff,
  [ETypeRecit.Tome] : mdiBookOpen,
  [ETypeRecit.Chapiter] : mdiBookOpenVariant,
}

export enum EEtatLecture {
  Inconnu = 'INCONNU',
  Nouveau = 'NOUVEAU',
  Connu = 'CONNU',
  EnCours = 'EN_COURS',
  Lu = 'LU',
}
interface IEtatLectureeMdi {
  [key: string]: string
}

export const EtatLectureeMdi:IEtatLectureeMdi =  {
  [EEtatLecture.Inconnu] : mdiAccount,
  [EEtatLecture.Nouveau] : mdiEyePlus,
  [EEtatLecture.Connu] : mdiEye,
  [EEtatLecture.EnCours] : mdiEyeSettings,
  [EEtatLecture.Lu] : mdiEyeCheck
}