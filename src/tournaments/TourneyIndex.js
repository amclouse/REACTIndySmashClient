import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TourneyCreate from './TourneyCreate'
import TourneyTable from './TourneyTable';
import TourneyEdit from './TourneyEdit'


const TourneyIndex = (props) => {
    // console.log(`TOURNEY INDEX: `,props)
    const [tourneys, setTourneys] = useState([])
    const [updateActive, setUpdateActive] = useState(false)
    const [tourneysToUpdate, setTourneysToUpdate] = useState({})

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
                console.log(`FETCHED TOURNEYS: `, logData)
                setTourneys(logData)
            })
    }
    const editUpdateTourney = (tourneys) => {
        setTourneysToUpdate(tourneys)
    }
    const updateOn = () => {
        setUpdateActive(true)
    }
    const updateOff = () => {
        setUpdateActive(false)
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
                    <TourneyTable tourneys={tourneys} editUpdateTourney={editUpdateTourney} updateOn={updateOn} 
                    fetchTourneys={fetchTourneys} token={props.token} />
                </Col>
                {updateActive ? <TourneyEdit fetchTourneys={fetchTourneys} token={props.token} tourneysToUpdate={tourneysToUpdate} updateOff={updateOff}/> : <></>}
            </Row>
        </Container>
    )
}

export default TourneyIndex;