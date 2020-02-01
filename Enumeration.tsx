//enumerateur

/*ok*/
export enum EnumAccess {
  NON_AUTORISE = "NON_AUTORISE",
  AUTORISE_LECTURE = "AUTORISE_LECTURE",
  AUTORISE_ECRITURE = "AUTORISE_ECRITURE"
}

/*ok*/
export enum EnumEtatLecture {
  NON_OUVERT = "NON_OUVERT",
  OUVERT = "OUVERT",
  DEBUTE = "DEBUTE",
  FINI = "FINI"
}

/*ok*/
export enum EnumEtatEcriture {
  STORYBOARD = "STORYBOARD",
  SCENARIO = "SCENARIO",
  VERSION = "VERSION",
  FINAL = "FINAL",
  ANNULE = "ANNULE"
}
