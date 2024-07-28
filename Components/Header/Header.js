import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Homebanner from '../Homebanner/Homebanner';
import cx from 'classnames';
import s from '../../styles/HomeBanner.module.css'


const navData = ['home', 'Product', 'Reviews']
const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className={s.banner_bg}>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='text-white'>Demo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShow(!show)} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Offcanvas show={show} onHide={() => setShow(!show)}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Navbar.Collapse>
                    <Nav className={s.navContainer}>

                        {
                            navData?.map((data, index) => {
                                return (
                                    <Nav.Link href="#home" className={cx('text-white font-thin', s.navItem)} key={index}>{data}</Nav.Link>
                                )
                            })
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Homebanner />
        </div>
    );
}

export default Header
