import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import './MyJumbotron.css'

class MyJumbotron extends React.Component{
    render(){
        return(
            <Jumbotron>
            <h1>WAPI</h1>
            <p>
                The Weather API
            </p>
            </Jumbotron>
        )
    }
}
export default MyJumbotron