import React from 'react'
import { IProps } from './IStartButton'
import './StartButton.css'

const StartButton: React.FC<IProps> = (props) => {
    const {
        handleQuery,
        children
      } = props

      return (
        <button onClick={handleQuery} className='start-button'>{children}</button>
      )
}

export default StartButton