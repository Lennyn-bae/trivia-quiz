import React from "react"
import { IProps } from './IStarGrades'
import './StarGrades.css'

const StarGrades: React.FC<IProps> = (props) => {
  const {
    className
  } = props

  return (
    <div >
      <svg
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="#969CDC"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>


    </div>
  )
}

export default StarGrades