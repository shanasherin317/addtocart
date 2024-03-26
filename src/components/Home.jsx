import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Products from './Products';

function ImgOverlayExample() {
  return (
    <>
    <Card className=" text-white border-0 ">
      <Card.Img className='card-img' src="https://img.freepik.com/free-photo/excited-girl-scream-joy-making-fist-pump-holding-shopping-bag-rejoicing-standing-dress-ove_1258-120529.jpg?w=1060&t=st=1700738659~exp=1700739259~hmac=1a2decb17b8301efeb0852bd6696fad27a2e45bfdd0c8e1b4b992a7a1a702382" alt="Card image" />
      <Card.ImgOverlay>
        <Container className='mt-3 '>
        <Card.Title className='display-3 fw-bolder '>NEW SEASON ARRIVALS</Card.Title>
        <Card.Text className='fs-2'>
          CHECKOUT ALL THE TRENDS
        </Card.Text>
        </Container>
      </Card.ImgOverlay>
    </Card>
    <Products/>
    </>
  );
}

export default ImgOverlayExample;