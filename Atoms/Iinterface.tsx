import { mdiEyeSettings, mdiEye, mdiEyeCheck, mdiEyePlus, mdiEyeOff } from '@mdi/js'

export  interface ICase {
  id : number
  etatLecture:EEtatLecture
}

export  interface IHeaderCase {
  title : string
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
  [EEtatLecture.Inconnu] : mdiEyeOff,
  [EEtatLecture.Nouveau] : mdiEyePlus,
  [EEtatLecture.Connu] : mdiEye,
  [EEtatLecture.EnCours] : mdiEyeSettings,
  [EEtatLecture.Lu] : mdiEyeCheck
}