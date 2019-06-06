
import {ILine} from '../Molecules/Iinterface'
import {IHeaderCase} from '../Atoms/Iinterface'

export  interface IStory{
  header : IHeaderCase
  title: string
  lines : Array<ILine>
  columns: Array<ILine>
}