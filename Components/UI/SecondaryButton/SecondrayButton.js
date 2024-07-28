import React from 'react'
import cx from 'classnames'
import s from './SecondrayButton.module.css'

const SecondrayButton = ({buttonText,className}) => {
  return (
    <button className={cx(s.secondrayButtonStyle,className)}>{buttonText}</button>
  )
}

export default SecondrayButton
