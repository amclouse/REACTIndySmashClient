import React, { useState, useEffect } from 'react';
import {
  Card, CardTitle, CardText, CardDeck,
   CardBody, CardFooter
} from 'reactstrap';
import '../css/main.css'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.css'
import APIURL from '../../src/helpers/environment'


const TourneyDisplayAll = (props) => {

  const [tourneys, setTourneys] = useState([])
  // console.log(`OUTSIDE FETCHALL`,tourneys)

  const fetchAllTourneys = () => {
    // console.log('INDEX HIT')
    fetch(`${APIURL}/smash/tourney/alltourneys`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        // 'Authorization': props.token
      })
    }).then((res) => res.json())
      .then((logData) => {
        // console.log(`FETCHED TOURNEYS: `, logData)
        setTourneys(logData)
      })
  }

  useEffect(() => {
    // console.log(`USE EFFECT HIT!`)
    fetchAllTourneys()
  }, [])

  const tourneyMapper = () => {
    return tourneys.map((tourneys, index) => {
      return (
        <div className="card-div">
          <Card className="display-all-card" key={index}>
            <CardBody className="card-body" body inverse color="info">
              <CardTitle id="card-title">{tourneys.name}</CardTitle>
              <CardText id="card-text">{tourneys.location}</CardText>
              <CardText id="card-text">{tourneys.maxPlayers}</CardText>
              <CardText id="card-text">{tourneys.format}</CardText>
              <CardText id="card-text">{tourneys.version}</CardText>
              <CardText id="card-text">{tourneys.prizePool}</CardText>
              <CardFooter id="card-footer">{tourneys.date}</CardFooter>
            </CardBody>
          </Card>
        </div>
      )
    })
  }

  return (
    <div>
      <CardDeck>
        {tourneyMapper()}
      </CardDeck>
    </div>
  );
};

export default TourneyDisplayAll;
