import React, { useState, useRef } from 'react'
import Comp from '@lp/monorepo2'

interface IProps {
  /**
   * Is this the principal call to action on the page?
   */
  text: string
}

const Index: React.FC<IProps> = ({
  text
}) =>{

 return (<div>
  组件 1 {text}
  <Comp text="2"/>
 </div>)
}

export default Index