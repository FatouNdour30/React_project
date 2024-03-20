import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/image1.jpg'; // Importer l'image locale 1
import image2 from '../assets/images/image2.jpg'; // Importer l'image locale 2
import image3 from '../assets/images/image3.jpg'; // Importer l'image locale 3
import Button from 'react-bootstrap/Button';

const imageStyle = {
  maxHeight: '400px', // Définir la hauteur maximale souhaitée
};

export default function AppHero() {
  return (
    <section id='home' className='hero'>
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={image1} alt='First slide' style={imageStyle} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Button variant="outline-warning">Let's GO Guys</Button>{' '}

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image2} alt='Second slide' style={imageStyle} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Button variant="outline-warning">Warning</Button>{' '}

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image3} alt='Third slide' style={imageStyle} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            <Button variant="outline-warning">Warning</Button>{' '}

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
