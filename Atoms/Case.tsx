import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {ICase, EtatLectureeMdi, TypeRecitMdi} from './Iinterface'
import ReactTooltip from 'react-tooltip'
import {findDOMNode} from 'react-dom'

interface IState { }
interface IProps {
  case : ICase
 }

class Case extends PureComponent<IProps, IState> {



  render() {

    const  {id, etatLecture, typeRecit} = this.props.case;
    return <div className="Case">
              <div className="Case_border">
               {TypeRecitMdi[typeRecit] && <div ref='typerecit' className="Case__typerecit" data-tip={TypeRecitMdi[typeRecit]['tooltip']} onClick={() => { ReactTooltip.hide(findDOMNode(this.refs.typerecit)) }}>
                    <Icon className="mdi-typerecit-icon" path={TypeRecitMdi[typeRecit]['logo']} />
                </div>}

               {EtatLectureeMdi[etatLecture] && <div ref='etat' className="Case__etat" data-tip={EtatLectureeMdi[etatLecture]['tooltip']} onClick={() => { ReactTooltip.hide(findDOMNode(this.refs.etat)) }}>
                    <Icon className="mdi-etat-icon" path={EtatLectureeMdi[etatLecture]['logo']} />
                </div>}
             </div>
                
             </div>
  }


}

export default Case

/*

*/