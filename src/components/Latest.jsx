import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Importez les images correctement
import women1 from '../assets/images/women1.jpg';
import women2 from '../assets/images/women2.jpg';
import women3  from '../assets/images/women3.jpg'; // Importez l'image nature.jpg

export default function AppLatest() {
  return (
    <Container>
        <div className='title'>
            <h3 className='text-center text-warning'>FROM LATEST BLOG</h3>
            <h5 className='text-center mb-3'>Get ours Latest  news from blog</h5>
        </div>
      <Row>
        <Col>
          <Card>
            <Card.Img src={women1} alt='Woman' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button href='#' className='bg-warning'>Button</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={women2} alt='Woman 2' /> {/* Utilisez women2 pour la deuxième carte */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button href='#' className='bg-warning'>Button</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={women3} alt='Nature' /> {/* Utilisez natureImage pour la troisième carte */}
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button href='#' className='bg-warning'>Button</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
