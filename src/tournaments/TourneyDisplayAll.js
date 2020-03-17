import React, { useState, useEffect } from 'react';
import {
  Card, Table, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import '../css/main.css'
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
        <Card className="display-all-card" key={index}>
          <CardBody body inverse color="info">
            <CardTitle>Tournament</CardTitle>
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
      {tourneyMapper()}
    </CardDeck>
  );
};

export default TourneyDisplayAll;
//   const tourneyMapperAll = () => {

  //     return tourneys.map((tourneys, index) => {
  //         return(
    //             <tr className="table-row" key={index}>
    //                 <th scope='row'>{tourneys.id}</th>
  //                 <td className="table-td">{tourneys.name}</td>
  //                 <td className="table-td">{tourneys.date}</td>
  //                 <td className="table-td">{tourneys.location}</td>
  //                 <td className="table-td">{tourneys.maxPlayers}</td>
  //                 <td className="table-td">{tourneys.format}</td>
  //                 <td className="table-td">{tourneys.version}</td>
  //                 <td className="table-td">{tourneys.prizePool}</td>

  //             </tr>
  //         )
  //     })

  //     <Table className="tourney-table" striped >
  //     <thead className="thead">
  //         <tr>
  //             <th>#</th>
  //             <th>Name</th>
  //             <th>Date</th>
  //             <th>Location</th>
  //             <th>MaxPlayers</th>
  //             <th>Format</th>
  //             <th>Version</th>
  //             <th>Prize Pool</th>
  //         </tr>
  //     </thead>
  //     <tbody>
  //         {tourneyMapperAll()}
  //     </tbody>
  //   {/* <h1>{tourneys.name}</h1> */}
  // </Table>
  // }