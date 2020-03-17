import React from 'react'
import { Button } from 'reactstrap'
import Sidebar from './Navbar'


const Home = (props) => {

    console.log(`HOME: ${props.token}`)

    return (

        <div>

            <Button onClick={props.clickLogout}>Logout</Button>
            <Sidebar className="sidebar" token={props.token} />

        </div>
    )
}

export default Home;