import React, { PureComponent, ReactNode } from 'react'
import {ILine} from './Iinterface'
import Case from '../Atoms/Case'
interface IState { }
interface IProps {
  line : ILine
 }

class Line extends PureComponent<IProps, IState> {



  render() {

    const {cases } = this.props.line

const domCases = cases.map((el) => {
  return <Case case={el} />
});
    const  {line} = this.props;
    return <div className="Line">
    {domCases}
    </div>
  }


}

export default Line