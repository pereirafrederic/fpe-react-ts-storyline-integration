
import {ILine} from '../Molecules/Iinterface'

export  interface IStory{
  title: string
  lines : Array<ILine>
  columns: Array<ILine>
}