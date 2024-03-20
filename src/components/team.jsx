import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pro3 from '../assets/images/pro3.jpg';
import pro1 from '../assets/images/pro1.jpg';
import pro2 from '../assets/images/pro2.jpg';
// Importez d'autres images si nécessaire

export default function AppTeams() {
  return (
    <Container className='mt-md-5'>
      <div className='title'>
        <h1 className='text-center text-warning'>OUR TEAMS</h1>
        <h4 className='text-center mb-3'>Some of our experts</h4>
      </div>
      <Row>
        <Col>
          <Card style={{ width: '18rem', transition: 'opacity 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            <Card.Img variant="top" src={pro1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', transition: 'opacity 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            <Card.Img variant="top" src={pro2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', transition: 'opacity 0.3s ease-in-out' }} onMouseEnter={(e) => e.target.style.opacity = '0.8'} onMouseLeave={(e) => e.target.style.opacity = '1'}>
            <Card.Img variant="top" src={pro3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        {/* Ajoutez d'autres colonnes avec des cartes selon vos besoins */}
      </Row>
    </Container>
  );
}

