import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image1 from '../assets/images/image1.jpg'; // Chemin d'importation de l'image 1
import image2 from '../assets/images/image2.jpg'; // Chemin d'importation de l'image 2
import image3 from '../assets/images/image3.jpg'; // Chemin d'importation de l'image 3
import image4 from '../assets/images/image4.jpg'; // Chemin d'importation de l'image 4
import image5 from '../assets/images/image5.jpg';


export default function AppWorks() {
  return (
    <Container fluid>
      <div className='title-holder mt-md-5'>
        <h2 className='text-center text-warning'>Our Works</h2>
        <div className='subtitle text-center mb-3'>OUR AWESOME WORKS</div>
      </div>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image1} alt='Image 1' fluid />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image2} alt='Image 2' fluid />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image3} alt='Image 3' fluid />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image4} alt='Image 4' fluid />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image5} alt='Image 5' fluid />
          </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='image-frame'>
            <Image src={image4} alt='Image 4' fluid />
          </div>
        </Col>
        {/* Ajoutez d'autres colonnes selon vos besoins */}
      </Row>
    </Container>
  );
}
