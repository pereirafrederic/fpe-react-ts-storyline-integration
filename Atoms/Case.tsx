import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {ICase, EtatLectureeMdi, TypeRecitMdi} from './Iinterface'
import ReactTooltip from 'react-tooltip'

interface IState { }
interface IProps {
  case : ICase
 }

class Case extends PureComponent<IProps, IState> {



  render() {

    const  {id, etatLecture, typeRecit} = this.props.case;
    return <div className="Case">
              <div className="Case_border">
                <div className="Case__typerecit" data-tip={TypeRecitMdi[typeRecit]['tooltip']}>
                    <Icon className="mdi-typerecit-icon" path={TypeRecitMdi[typeRecit]['logo']} />
                </div>

                <div className="Case__etat" data-tip={EtatLectureeMdi[etatLecture]['tooltip']}>
                    <Icon className="mdi-etat-icon" path={EtatLectureeMdi[etatLecture]['logo']} />
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