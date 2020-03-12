import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'


const TourneyEdit = (props) => {
    const [editName, setEditName] = useState(props.tourneysToUpdate.name);
    const [editDate, setEditDate] = useState(props.tourneysToUpdate.date);
    const [editLocation, setEditLocation] = useState(props.tourneysToUpdate.location);
    const [editMaxPlayers, setEditMaxPlayers] = useState(props.tourneysToUpdate.maxPlayers)
    const [editFormat, setEditFormat] = useState(props.tourneysToUpdate.format)
    const [editVersion, setEditVersion] = useState(props.tourneysToUpdate.version)
    const [editPrizePool, setEditPrizePool] = useState(props.tourneysToUpdate.prizePool)
    const workoutUpdate = (event, tourneys) => {
        event.preventDefault();
        fetch(`https://localhost3001/smash/update/${props.tourneysToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({name: editName, location: editLocation, date: editDate, maxPlayers: editMaxPlayers, format: editFormat, version: editVersion, prizePool: editPrizePool}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => {
            props.fetchTourneys();
            props.updateOff()
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Log a Workout</ModalHeader>
            <ModalBody>
                <Form onSubmit={workoutUpdate}>
                <FormGroup>
                    <Label htmlFor="result">Change Name:</Label>
                    <Input name="result" value={editName} onChange={(e)  => setEditName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Date:</Label>
                    <Input name="description" value={editDate} onChange={(e)  => setEditDate(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Location:</Label>
                    <Input name="description" value={editLocation} onChange={(e)  => setEditLocation(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Max Players:</Label>
                    <Input name="description" value={editMaxPlayers} onChange={(e)  => setEditMaxPlayers(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Format:</Label>
                    <Input name="description" value={editFormat} onChange={(e)  => setEditFormat(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Version:</Label>
                    <Input name="description" value={editDesc} onChange={(e)  => setEditDesc(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="description">Change Prize Pool:</Label>
                    <Input name="description" value={editDesc} onChange={(e)  => setEditDesc(e.target.value)}/>
                </FormGroup>

                <Button type="submit">Update Workout</Button>
                </Form>
            </ModalBody>
        </Modal>

    )
}

export default TourneyEdit;