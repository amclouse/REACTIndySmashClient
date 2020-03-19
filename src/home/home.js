import React from 'react'
import { Button } from 'reactstrap'
import Sidebar from './Navbar'
import Example from './Homepage'


const Home = (props) => {

    console.log(`HOME: ${props.token}`)

    return (

        <div>
            <Button className="logout" onClick={props.clickLogout}>Logout</Button>
            <Sidebar className="sidebar" token={props.token} />
            <Example />
        </div>
    )
}

export default Home;