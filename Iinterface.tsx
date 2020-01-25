import { ILine } from "../Molecules/Iinterface";

export interface IStory {
  id: number;
  lines: ILine[];
  columns: ILine[];
}
