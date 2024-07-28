import React from 'react'
import cx from 'classnames'
import s from './PrimaryButton.module.css'
const PrimaryButton = ({buttonText,className}) => {
  return (
      <button className={cx(s.primaryButtonStyle,className)}><span className={s.innerText}>{buttonText}</span></button>
  )
}

export default PrimaryButton
