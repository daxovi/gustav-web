import React from 'react'
import "./BoldAppName.css";

const BoldAppName = ({appName}) => {
  return (
    <h2 className='bold-app-name'>{appName}</h2>
  )
}

export default BoldAppName