import { mdiEyeSettings, mdiEye, mdiEyeCheck, mdiEyePlus, mdiAccount, mdiEyeOff, mdiBookOpen, mdiBookOpenVariant } from '@mdi/js'

export interface ICase {
  id: number
  etatLecture: EEtatLecture
  typeRecit: ETypeRecit
}

export interface IHeaderCase {
  title: string
}

export enum ETypeRecit {
  PointOfView = 'POINT_OF_VIEW',
  Tome = 'TOME',
  Chapiter = 'CHAPITER',
}


export const TypeRecitMdi: IConfigMdi = {
  [ETypeRecit.PointOfView]: {
    logo: mdiAccount,
    tooltip: 'Le point de vue de'
  },
  [ETypeRecit.Tome]: {
    logo: mdiBookOpen,
    tooltip: 'Le tome'
  },
  [ETypeRecit.Chapiter]: {
    logo: mdiBookOpenVariant,
    tooltip: 'Le Chapitre'
  },
}

export enum EEtatLecture {
  Inconnu = 'INCONNU',
  Nouveau = 'NOUVEAU',
  Connu = 'CONNU',
  EnCours = 'EN_COURS',
  Lu = 'LU',
}

interface IConfigItemMdi {
  logo: string,
  tooltip: string
}

interface IConfigMdi {
  [key: string]: IConfigItemMdi
}

export const EtatLectureeMdi: IConfigMdi = {
  [EEtatLecture.Inconnu]: {
    logo: mdiEyeOff, tooltip: 'Le Chapitre'
  },
  [EEtatLecture.Nouveau]: {
    logo: mdiEyePlus, tooltip: 'Le Chapitre'
  },
  [EEtatLecture.Connu]: {
    logo: mdiEye, tooltip: 'Le Chapitre'
  },
  [EEtatLecture.EnCours]: {
    logo: mdiEyeSettings, tooltip: 'Le Chapitre'
  },
  [EEtatLecture.Lu]: {
    logo: mdiEyeCheck, tooltip: 'Le Chapitre'
  },
}