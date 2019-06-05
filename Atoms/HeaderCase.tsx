import React, { PureComponent, ReactNode } from 'react'
import Icon from '@mdi/react'








import {IHeaderCase} from './Iinterface'

interface IState { }
interface IProps {
  header?: IHeaderCase
 }

class HeaderCase extends PureComponent<IProps, IState> {



  render() {

    const  {title} = this.props.header;
    return <div className="HeaderCase">

    <div className="HeaderCase__title">
         
         {title ? <h1>{title}</h1> : ''}
    </div>
     </div>
  }


}

export default HeaderCase