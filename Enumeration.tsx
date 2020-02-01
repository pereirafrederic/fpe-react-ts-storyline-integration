//enumerateur
export enum EnumAccess {
  NON_AUTORISE = "NON_AUTORISE",
  AUTORISE_LECTURE = "AUTORISE_LECTURE",
  AUTORISE_ECRITURE = "AUTORISE_ECRITURE"
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
  VERSION = "VERSION",
  FINAL = "FINAL",
  ANNULE = "ANNULE"
}
