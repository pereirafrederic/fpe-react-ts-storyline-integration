import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {IHeaderCase} from './Iinterface'

interface IState { }
interface IProps {
  header?: IHeaderCase
  isFristColumn: boolean
 }

class HeaderCase extends PureComponent<IProps, IState> {



  render() {
const  {header, isFristColumn} = this.props;
    const  {title} = header;
    return <div className={`CaseHeader ${isFristColumn? 'line' : ''}`}>

    <div className="HeaderCase__title">
         
         {title ? <h1>{title}</h1> : ''}
    </div>
     </div>
  }


}

export default HeaderCase