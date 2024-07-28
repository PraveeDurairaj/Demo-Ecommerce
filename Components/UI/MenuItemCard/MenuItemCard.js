import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import s from './MenuItem.module.css'
import cx from 'classnames'

const MenuItemCard = ({ image }) => {
  const [skeleton, setSkeleton] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => setSkeleton(false))
    setSkeleton(false)
  })
  return (
    
      skeleton ? <div className={cx(s.productMenuImage,'skeleton',s.menuImageConatiner)}></div>:
       <div className={cx(s.menuImageConatiner)}>
        <Image src={image} className={s.productMenuImage} alt='menuImg'></Image>
      </div>
  )
}

export default MenuItemCard
