import React from 'react';
import { Table, } from 'reactstrap'
import APIURL from '../helpers/environment'


import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const TourneyTable = (props) => {
    console.log(`TABLE PROPS: `, props)

    const deleteTourneys = (tourneys) => {
        fetch(`${APIURL}/smash/tourney/delete/${tourneys.name}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchTourneys())
        // .then(console.log(`TABLE FETCH HIT`))
    }

    const tourneyMapper = () => {
        console.log(props)
        return props.tourneys.map((tourneys, index) => {
            return (
                <tr className="table-row" key={index}>
                    <th scope='row'>{tourneys.id}</th>
                    <td className="table-td">{tourneys.name}</td>
                    <td className="table-td">{tourneys.date}</td>
                    <td className="table-td">{tourneys.location}</td>
                    <td className="table-td">{tourneys.maxPlayers}</td>
                    <td className="table-td">{tourneys.format}</td>
                    <td className="table-td">{tourneys.version}</td>
                    <td className="table-td">{tourneys.prizePool}</td>
                    <td>
                        <Button color="warning" className="update-button" onClick={() => { props.editUpdateTourney(tourneys); props.updateOn() }}>Update</Button>
                        <IconButton aria-label="delete"  >
                            <DeleteIcon fontSize="large" onClick={() => {deleteTourneys(tourneys)}}/>
                        </IconButton>
                    </td>
                </tr>
            )
        })
    }
    // onClick={() => {props.editUpdateTourney(tourneys); props.updateOn()}
    return (
        <>
            {console.log('got it')}
            <h3>Your Tournaments</h3>
            <hr />
            <Table className="tourney-table" striped >
                <thead className="thead">
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