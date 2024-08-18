import React from 'react'
import {Container } from 'react-bootstrap'
import cx from 'classnames';
import s from './HomeBanner.module.css'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';

const Homebanner = () => {
    return (
        <Container>
            <div className={s.bannerContainer}>
                <h1 className={'text-white text-center title-text top80'}>Elevate your bussiness with standout online presence</h1>
                 <p className={'text-white text-center font-thin'}>Step into the Future of Shopping: Embrace the convenience of online shopping with our curated selection of products. Explore, click, and shop from the comfort of your home today!</p>
                 <PrimaryButton buttonText={'Contact'} className={'text-white text-center font-thin'} />
            </div>
        </Container>

    )
}

export default Homebanner
