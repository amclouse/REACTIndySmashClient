import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (event) => {
        console.log('Yes!')
        event.preventDefault();
        fetch('http://localhost:3002/smash/user/signup', {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup >
                <Label htmlFor="email">Signup</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="email" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label htmlFor="password" hidden>Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="password" />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    );
}

export default Signup;