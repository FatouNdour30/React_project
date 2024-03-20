import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// Importez vos images correctement
import rename1 from '../assets/images/rename1.jpg';
import rename2 from '../assets/images/rename2.jpg';
import rename3 from '../assets/images/rename3.jpg';

// Styles personnalisés pour réduire la hauteur des images
const imageStyles = {
  height: '500px', // Réglez la hauteur selon vos besoins
  objectFit: 'cover', // Assurez-vous que l'image couvre la hauteur spécifiée
};

// Composant ExampleCarouselImage pour les images du carousel
function ExampleCarouselImage({ src, alt }) {
  return (
    <img
      className="d-block w-100"
      src={src}
      alt={alt}
      style={imageStyles} // Appliquez les styles personnalisés à l'image
    />
  );
}

export default function AppTestimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className='mt-md-5'>
        <div className='subtile text-center'>
            <h1 className='text-warning'>Clients Testimonials</h1>
            <h5 className='mb-3'>What clients says about us</h5>
        </div>
      <Row>
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <ExampleCarouselImage src={rename1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={rename2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <ExampleCarouselImage src={rename3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
