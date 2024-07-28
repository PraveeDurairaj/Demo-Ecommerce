import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import Image from 'next/image';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SecondrayButton from '../SecondaryButton/SecondrayButton';
import s from './ProductCard.module.css'


const ProductCard = ({ProductName ,productImage}) => {
  const [skeleton, setSkeleton] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => setSkeleton(false))
    setSkeleton(false)
  })
  return (
    skeleton ? <div className={cx(s.productSkeletnContainer,'skeleton')} ></div> :
     <div className={s.productContainer}>
      <div className={s.productImageBox}>
       {productImage &&  <Image src={productImage} className={s.imageBox}></Image>} 
      </div>
      <div>
         {ProductName &&  <h6>{ProductName}</h6>}
         <div className={s.buttonContainer}>
         <PrimaryButton buttonText={'Buy Now'} className={'text-white font-thin'} />
         <SecondrayButton buttonText={'Add'}/>
         </div>
      </div>
    </div>
  )
}

export default ProductCard
