import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {ICase, EtatLectureeMdi, TypeRecitMdi} from './Iinterface'

interface IState { }
interface IProps {
  case : ICase
 }

class Case extends PureComponent<IProps, IState> {



  render() {

    const  {id, etatLecture, typeRecit} = this.props.case;
    return <div className="Case">
              <div className="Case_border">
                <div className="Case__typerecit">
                    <Icon className="mdi-typerecit-icon" path={TypeRecitMdi[typeRecit]} />
                </div>

                <div className="Case__etat">
                    <Icon className="mdi-etat-icon" path={EtatLectureeMdi[etatLecture]} />
                </div>
             </div>
                 <div className="top left"></div>
    <div className="top right"></div>
    <div className="bottom left"></div>
    <div className="bottom right"></div>
             </div>
  }


}

export default Case

/*

*/