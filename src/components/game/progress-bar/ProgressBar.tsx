import React from "react"
import { IProps } from './IProgressBar'
import * as CSS from 'csstype'
import './ProgressBar.css'

const ProgressBar: React.FC<IProps> = (props) => {
  const {
    completed
  } = props

  const fillerStyles: CSS.Properties = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#FF7878',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  return (
    <div className='container'>
      <div style={fillerStyles}>
      </div>
    </div>
  )
}

export default ProgressBar