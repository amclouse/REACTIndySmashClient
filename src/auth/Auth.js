import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Login from './Login'
import Signup from './Signup'
import { Jumbotron } from 'reactstrap';
// import '../css/main.css'


const Auth = (props) => {
    return (
        <div>
            <Jumbotron classname="jumbotron" fluid>
                <Container fluid>
                    <h1 className="display-3">Smash Indy</h1>
                    <h3 className="lead">The next place to find tournaments in your area</h3>
                </Container>
            </Jumbotron>
            <Container className="auth-container">
                <Row>
                    <Col md="6" className="login-col">
                        <Signup updateToken={props.updateToken} />
                    </Col>
                    <Col md="6" className="login-col">
                        <Login updateToken={props.updateToken} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Auth;