import React from 'react'
import cx from 'classnames'
import s from './FestivalSale.module.css'
import Image from 'next/image'
import demo from '../../public/Assets/grocery.jpg'

const FestivalSale = () => {
 
  return (
    <div className={cx(s.doualBoxContainer,'top80')}>
    <div className={cx(s.box)}>
    <Image src={demo}  alt='saleImage' className={s.saleImage}></Image>
    <h4>hgdghjdfg jhsjsfhsgdhfhgsdhsdfdhsfs ghdshgsf hsgf fdghfshfsdhf ghdfhfshf ashhfhs gfhgsdf hgds</h4>
    </div>
    <div className={cx(`skeleton`,s.box)}>
      
    </div>
  </div>
  )
}

export default FestivalSale
