import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
        console.log('CREATE HIT')
    fetch('http://localhost:3002/smash/tourney/create', {
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
    }

    return (
        <>
            <h3>Host a Tournament</h3>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <h4>Tournament Name</h4>
                    <Label htmlFor="name" />
                    <Input name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </FormGroup>
                <h4>Date</h4>
                <FormGroup>
                    <Label htmlFor="date" />
                    <Input name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </FormGroup>
                <h4>Location</h4>
                <FormGroup>
                    <Label htmlFor="location" />
                    <Input name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
                </FormGroup>
                <h4>Max Players</h4>
                <FormGroup>
                    <Label htmlFor="maxPlayers" />
                    <Input name="maxPlayers" value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value)} />
                </FormGroup>
                <h4>Format</h4>
                <FormGroup>
                    <Label htmlFor="format" />
                    <Input name="format" value={format} onChange={(e) => setFormat(e.target.value)} />
                </FormGroup>
                <h4>Version</h4>
                <FormGroup>
                    <Label htmlFor="version" />
                    <Input name="version" value={version} onChange={(e) => setVersion(e.target.value)} />
                </FormGroup>
                <h4>Prize Pool</h4>
                <FormGroup>
                    <Label htmlFor="prizePool" />
                    <Input name="prizePool" value={prizePool} onChange={(e) => setPrizePool(e.target.value)} />
                </FormGroup>
                <Button type="submit">Click to submit</Button>
            </Form>
        </>
    )
}

export default TourneyCreate;