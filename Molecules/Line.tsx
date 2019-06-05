import React, { PureComponent, ReactNode } from 'react'
import { ILine } from './Iinterface'
import Case from '../Atoms/Case'
import HeaderCase from '../Atoms/HeaderCase'
import { IHeaderCase } from '../Atoms/Iinterface'

interface IState { }
interface IProps {
  line: ILine
  header: IHeaderCase
}

class Line extends PureComponent<IProps, IState> {



  render() {

    const { header } = this.props
    const { cases } = this.props.line;
    const domCases = cases.map((el) => {
      return <Case case={el} />
    });

    return <div className="Line">
      <HeaderCase header={header} />
      {domCases}
    </div>
  }


}

export default Line