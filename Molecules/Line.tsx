import React, { PureComponent, ReactNode } from 'react'
import {ILine} from './Iinterface'
import Case from '../Atoms/Case'
interface IState { }
interface IProps {
  line : ILine
 }

class Line extends PureComponent<IProps, IState> {



  render() {

    const  {line} = this.props;
    return <div className="Line">
    {line.cases.map(case => <Case case={case} />)}
    </div>
  }


}

export default Line