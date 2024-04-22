import React, { useState } from 'react';
import { Container, Form, Button, Tab, Tabs } from 'react-bootstrap';

function LoginPage({ onLogin }) {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ email: '', password: '', confirmPassword: '' });

    const handleLoginChange = e => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegisterChange = e => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("tequila");
        onLogin();
    };

    const handleRegister = e => {
        e.preventDefault();
        // Handle register logic here
    };

    return (
        <Container className='p-5' fluid>
            <Tabs defaultActiveKey="login" id="uncontrolled-tab-example">
                <Tab eventKey="login" title="Login">
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={loginData.email} onChange={handleLoginChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleLoginChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Tab>
                <Tab eventKey="register" title="Register">
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={registerData.email} onChange={handleRegisterChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" value={registerData.password} onChange={handleRegisterChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Tab>
            </Tabs>
        </Container>
    );
}

export default LoginPage;