import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIURL from '../helpers/environment'

const Signup = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

        const handleSubmit = (event) => {
            event.preventDefault();
            if(email && password){
                fetch(`${APIURL}/smash/user/signup`, {
                    method: 'POST',
                    body: JSON.stringify({email: email, password: password}),
                    headers: new Headers({
                        'Content-Type' : 'application/json'
                    })
                })
                .then(response => response.json())
                .then(data => props.updateToken(data.sessionToken))
            }else{
                alert('Please fill out all fields')
            }
        }
    

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup className="signup-formgroup">
                <Label className="auth-labels" htmlFor="email">Signup</Label>
                <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="email" />
            </FormGroup>
            {' '}
            <FormGroup>
                <Label htmlFor="password" hidden>Password</Label>
                <Input className="password-inputs" onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="password" />
            </FormGroup>
            <Button className="auth-buttons">Submit</Button>
        </Form>
    );
}

export default Signup;