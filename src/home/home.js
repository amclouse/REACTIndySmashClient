import React from 'react'
import { Button } from 'reactstrap'
import Sidebar from './Navbar'


const Home = (props) => {
    return(
        <div>
            <Button onClick={props.clickLogout}>Logout</Button>
            <Sidebar token={props.token}/>
        </div>
    )
}

export default Home;