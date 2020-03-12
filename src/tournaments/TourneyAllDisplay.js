import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TourneyCreate from './TourneyCreate'
import TourneyTable from './TourneyTable';


const TourneyIndex = (props) => {
    console.log(`TOURNEY INDEX: `,props)
    const [tourneys, setTourneys] = useState([])

    const fetchTourneys = () => {
        console.log('INDEX HIT')
        fetch('http://localhost:3002/smash/tourney/mytourneys', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
            .then((logData) => {
                console.log(`FETCHED TOURNEYS: `,logData)
                setTourneys(logData)
            })
    }
    useEffect(() => {
        console.log(`USE EFFECT HIT!`)
        fetchTourneys()
    }, [])

    return (
        <Container>
            <Row>
                <Col md="3">
                    <TourneyCreate fetchTourneys={fetchTourneys} token={props.token} />
                </Col>
                <Col md="9">
                    <h2>Your Tournaments</h2>
                    <TourneyTable tourneys={tourneys} fetchTourneys={fetchTourneys} token={props.token}/>
                </Col>
            </Row>
        </Container>
    )
}

export default TourneyIndex;