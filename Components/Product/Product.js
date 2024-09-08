import React from 'react'
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import ProductCard from '../UI/productCard/ProductCard'

const productdata = [
  {
    id:1,
    name:'Product Name',
    info:"",
    img:''
  },
  {
    id:2,
    name:'Product Name',
    img:''
  },
  {
    id:3,
    name:'Product Name',
    img:''
  },
  {
    id:4,
    name:'Product Name',
    img:''
  },
]
const Product = () => {
  return (
    <div className='top80'>
    <h2 className='subTitle-text text-center bottom50'>Experience our unique Products</h2>
    <Container>
      <Row>
       {
        productdata?.map((data)=>{
          return(
            <Col xs={12} sm={6} md={4} lg={3} xl={3} key={data?.id}>
            <ProductCard ProductName={data?.name}/>        
            </Col>
          )
        })
       }
      </Row>
    </Container>
    <div  className='top80'></div>
  </div>
  )
}

export default Product
