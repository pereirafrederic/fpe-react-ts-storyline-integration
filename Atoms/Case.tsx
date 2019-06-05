import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {ICase, EtatLectureeMdi} from './Iinterface'

interface IState { }
interface IProps {
  case : ICase
 }

class Case extends PureComponent<IProps, IState> {



  render() {

    const  {id, etatLecture} = this.props.case;
    return <div className="Case">

    <div className="Case__etat">
         <Icon className="mdi-etat-icon" path={EtatLectureeMdi[etatLecture]} />
    </div>
     </div>
  }


}

export default Case