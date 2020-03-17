import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import APIURL from '../helpers/environment'


const TourneyCreate = (props) => {
console.log('TOURNEY CREATE: ', props)

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('')
    const [maxPlayers, setMaxPlayers] = useState('')
    const [format, setFormat] = useState('')
    const [version, setVersion] = useState('')
    const [prizePool, setPrizePool] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && date && location && maxPlayers && format && version && prizePool) {
            fetch(`${APIURL}/smash/tourney/create`, {
                method: 'POST',
                body: JSON.stringify({ name: name, date: date, location: location, maxPlayers: maxPlayers, format: format, version: version, prizePool: prizePool}),
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then((res) => res.json())
                .then((logData) => {
                    console.log(logData);
                    setName('')
                    setDate('')
                    setLocation('')
                    setMaxPlayers('')
                    setFormat('')
                    setVersion('')
                    setPrizePool('')
                    props.fetchTourneys()
                })
        } else { alert('Please fill out all fields')

        }

        
    }

    return (        
        <>
            <h3>Host a Tournament</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <h4>Tournament Name</h4> */}
                    <Label htmlFor="name" />
                    <Input placeholder="Tournament Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="date" />
                    <Input placeholder="Date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="location" />
                    <Input placeholder="Location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="maxPlayers" />
                    <Input placeholder="Max Players"name="maxPlayers" value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="format" />
                    <Input placeholder="Format" name="format" value={format} onChange={(e) => setFormat(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="version" />
                    <Input placeholder="Version" name="version" value={version} onChange={(e) => setVersion(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="prizePool" />
                    <Input placeholder="Prize Pool" name="prizePool" value={prizePool} onChange={(e) => setPrizePool(e.target.value)} />
                </FormGroup>
                <Button type="submit">Create</Button>
            </Form>
        </>
    )
}

export default TourneyCreate;