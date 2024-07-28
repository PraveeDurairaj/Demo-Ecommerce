import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import MenuItemCard from '../UI/MenuItemCard/MenuItemCard';
import image1 from '../../public/Assets/vegitables.jpg';
import image2 from '../../public/Assets/grocery.jpg';
import image3 from '../../public/Assets/cake.jpg';
import image4 from '../../public/Assets/orange.jpg';
import s from  './ExloreProduct.module.css';



const ExploreProduct = () => {
  return (
    <div className='top80'>
      <h2 className='subTitle-text text-center bottom50'>Navigate through our offerings</h2>
      <Container>
        <Row className={s.imageBoxRow}>
          {[image1, image2, image3, image4].map((data,index) => {
            return (
              <Col xs={12} sm={6} md={4} lg={3} className={s.imageBox} key={index}>
                <MenuItemCard image={data}  />
              </Col>
            )
          })}

        </Row>
      </Container>



    </div>
  )
}

export default ExploreProduct
