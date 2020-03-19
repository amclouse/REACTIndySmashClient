import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
            <Jumbotron classname="jumbotron" fluid>
                <Container fluid>
                    <h1 className="display-3">Smash Indy</h1>
                    <h3 className="lead">The next place to find tournaments in your area.</h3>
                </Container>
            </Jumbotron>
    </div>
  );
};

export default Example;