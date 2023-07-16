import React from 'react';
import { Container, Row, Col, Button, Form, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Landing = () => {
    return (

        <section className="landing">
            <div className="container">
                <header class="text-black text-center py-5">

                    <h1>Welcome to Pan-Atlantic University Clinic</h1>
                    <p>We provide high-quality healthcare services.</p>
                    <Button variant="light">Learn More</Button>

                </header>

                <section class="bg-light py-5">

                    <Row>
                        <Col md={6}>
                            <h2>Register</h2>
                            <Form>
                                {/* Register form fields */}
                            </Form>
                            <p class="text-center">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </Col>
                        <Col md={6}>
                            <h2>Login</h2>
                            <Form>
                                {/* Login form fields */}
                            </Form>
                            <p class="text-center">
                                Don't have an account yet? <Link to="/register">Register</Link>
                            </p>
                        </Col>
                    </Row>

                </section>

            </div>
        </section>
    );
};

export default Landing;