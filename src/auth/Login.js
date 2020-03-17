import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import APIURL from '../helpers/environment';



const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      fetch(`${APIURL}/smash/user/login`, {
        method: 'POST',
        body: JSON.stringify({ email: email, password: password }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(response => response.json())
        .then(data => props.updateToken(data.sessionToken));
    } else {
      alert('Failed to authenticate email || password')
    }
  }

  return (
    <Form onSubmit={handleSubmit} >
      <FormGroup>
        <Label htmlFor="email">Login</Label>
        <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label htmlFor="password" hidden>Password</Label>
        <Input className="password-inputs" onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder="Password" />
      </FormGroup>
      {' '}
      <Button type="submit" className="login-button">Submit</Button>
    </Form>
  );
}

export default Login;