import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import cx from 'classnames'
import s from './AdminHeader.module.css'
import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../../public/Assets/menuIcon.png'
import dashboard from '../../public/Assets/dashboard.png'
import food from '../../public/Assets/food.png'
import workout from '../../public/Assets/workout.png'


const AdminHeader = ({ children }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        return (
            setShow(!show)
        )
    }
    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={12} md={12} lg={2} className={cx('noPadding', s.marginBottom)}>
                    <div className={s.adminHeaderContainer}>
                        <div className={s.mobileHeader}>
                            <span className='text-white'>Demo</span>
                            <span className={s.toggleIcon} onClick={handleClick}><Image src={menuIcon} alt='menuIcon' width={30} height={30}></Image></span>
                        </div>
                        <div className={cx(s.hidden, s.navListContainer, [show && s.navShow])}>
                            <Link href='/'>
                                <div className={s.adminListItem}>
                                    <Image src={dashboard} width={20} height={20}></Image>
                                    <span> Dasbord</span>
                                </div>
                            </Link>
                            <Link href='/manage_food'>
                                <div className={s.adminListItem}>
                                    <Image src={food} width={20} height={20}></Image>
                                    <span>Manage Food</span>
                                </div>
                            </Link>
                            <Link href='/manage_workout'>
                                <div className={s.adminListItem}>
                                    <Image src={workout} width={20} height={20}></Image>
                                    <span>Manage Workout</span>

                                </div>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={10} className='noPadding'>
                    {children}
                </Col>
            </Row>
        </Container>




    )
}

export default AdminHeader
