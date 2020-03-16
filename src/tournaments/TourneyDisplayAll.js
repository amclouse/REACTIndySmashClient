import React, { useState, useEffect } from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import APIURL from '../../src/helpers/environment'


const TourneyDisplayAll = (props) => {

  const [tourneys, setTourneys] = useState([])

  const fetchAllTourneys = (props) => {
    // console.log('INDEX HIT')
    fetch(`${APIURL}/smash/tourney/alltourneys`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': props.token 
      })
    }).then((res) => res.json())
      .then((logData) => {
        // console.log(`FETCHED TOURNEYS: `, logData)
        setTourneys(logData)
      })
      .then(() => props.fetchAllTourneys())

  }
  useEffect(() => {
    console.log(`USE EFFECT HIT!`)
    fetchAllTourneys()
}, [])
  
  const tourneyMapper = () => {
    console.log(props)
    return props.tourneys.map((tourneys, index) => {
      return (
        <Card key={index}>
          <CardBody>
            <CardTitle>Hello</CardTitle>
            <CardTitle>{tourneys.name}</CardTitle>
            <CardSubtitle>{tourneys.date}</CardSubtitle>
            <CardText>{tourneys.location}</CardText>
            <CardText>{tourneys.maxPlayers}</CardText>
            <CardText>{tourneys.format}</CardText>
            <CardText>{tourneys.version}</CardText>
            <CardText>{tourneys.prizePool}</CardText>
          </CardBody>
        </Card>
      )
    })
  }
  return (
    <CardDeck>
      {tourneyMapper}
    </CardDeck>
  );
};


export default TourneyDisplayAll;