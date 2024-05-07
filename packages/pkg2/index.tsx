import React, { useState, useRef } from 'react'


interface IProps {
  text: string
}

const Index: React.FC<IProps> = ({
  text
}) =>{

 return (<div>
  组件 2 {text}
 </div>)
}

export default Index