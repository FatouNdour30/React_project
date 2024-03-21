import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function ContactPage() {
  return (
    <Container className='mt-md-5'>
        <div className='subtitle'>
            <h1 className='text-center text-warning mb-3'>Contact Us</h1>
        </div>
      <Row>
        <Col>
          {/* Intégration du formulaire Visme */}
          <iframe
            title='Formulaire de contact'
            src='https://forms.visme.co/formsPlayer/z4r4dqv1-trade-show-customer-contact-form'
            width='100%'
            height='500px'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
