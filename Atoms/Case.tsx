import React, { PureComponent, ReactNode } from 'react'
import {ICase} from './Iinterface'
interface IState { }
interface IProps {
  case : ICase
 }

class Line Case extends PureComponent<IProps, IState> {



  render() {

    const  {case} = this.props;
    return <div className="Line">
    {case.}
    </div>
  }


}

export default Case