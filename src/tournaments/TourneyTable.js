import React from 'react';
import {Table, Button} from 'reactstrap'

const TourneyTable = (props) => {
    console.log(`TABLE PROPS: `,props)

    const deleteTourneys = (tourneys) => {
        fetch(`http://localhost:3002/smash/tourney/delete/${tourneys.name}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchTourneys())
        .then(console.log(`TABLE FETCH HIT`))
    }

    const tourneyMapper = () => {
        console.log(props)
        return props.tourneys.map((tourneys, index) => {
            return(
                <tr key={index}>
                    <th scope='row'>{tourneys.id}</th>
                    <td>{tourneys.name}</td>
                    <td>{tourneys.date}</td>
                    <td>{tourneys.location}</td>
                    <td>{tourneys.maxPlayers}</td>
                    <td>{tourneys.format}</td>
                    <td>{tourneys.version}</td>
                    <td>{tourneys.prizePool}</td>
                    <td>
                        <Button color="warning">Update</Button>
                        <Button color="danger" onClick={() => {deleteTourneys(tourneys)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        {console.log('got it')}
        <h3>Your Tournaments</h3>
        <hr />
        <Table striped >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>MaxPlayers</th>
                    <th>Format</th>
                    <th>Version</th>
                    <th>Prize Pool</th>
                </tr>
            </thead>
            <tbody>
                {tourneyMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default TourneyTable;