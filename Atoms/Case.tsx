import React, { PureComponent, ReactNode } from 'react'
import {ICase} from './Iinterface'
interface IState { }
interface IProps {
  case : ICase
 }

class Case extends PureComponent<IProps, IState> {



  render() {

    const  {id, etatLecture} = this.props.case;
    return <div className="Case">
    {etatLecture}
    </div>
  }


}

export default Case