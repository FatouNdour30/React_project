import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'; // Importer Card et Button
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion } from 'framer-motion';
import image4 from '../assets/images/image4.jpg';

export default function AppAbout() {
    const html = 60;
    const React = 90;
    const Bootstrap = 100;

    // Variants pour les animations de texte et de barres de progression
    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } }
    };

    const progressVariants = {
        hidden: { opacity: 0, width: '0%' },
        visible: { opacity: 1, width: '100%', transition: { duration: 1, delay: 0.5 } }
    };

    return (
        <section id='about' className='block-about-block text-center'>
            <Container className='mt-md-5'>
                <div className='title-holder'>
                    <h1 className='text-warning'>ABOUT</h1>
                    <h3 className='subtitle mb-3'>Learn About Us</h3>
                </div>
                <Row>
                    <Col sm={6}>
                        <Image src={image4} alt='Image 4' fluid />
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <Card.Body>
                                <Card.Text text-right>
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    With supporting text below as a natural lead-in to additional content.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit facilis in magni error nulla quam aperiam tenetur quaerat iste vero incidunt, excepturi, optio ratione ducimus nesciunt iusto esse ipsa!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <div className='progress-block mt-md-3'>
                            <h5>HTML/CSS/JAVASCRIPT</h5>
                            <motion.div
                                variants={progressVariants}
                                initial='hidden'
                                animate='visible'
                                className='progress-bar-container'
                            >
                                <ProgressBar now={html} label={`${html}%`} />
                            </motion.div>
                        </div>
                        <div className='progress-block'>
                            <h5>REACT JS</h5>
                            <motion.div
                                variants={progressVariants}
                                initial='hidden'
                                animate='visible'
                                className='progress-bar-container'
                            >
                                <ProgressBar now={React} label={`${React}%`} />
                            </motion.div>
                        </div>
                        <div className='progress-block'>
                            <h4>Bootstrap</h4>
                            <motion.div
                                variants={progressVariants}
                                initial='hidden'
                                animate='visible'
                                className='progress-bar-container'
                            >
                                <ProgressBar now={Bootstrap} label={`${Bootstrap}%`} />
                            </motion.div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
