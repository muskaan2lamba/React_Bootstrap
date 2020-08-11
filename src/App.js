import React from 'react'
import Navbar from './Components/MyNavbar'
import Jumbotron from './Components/MyJumbotron'
import InputGroup from './Components/MyInputGroup'
import './App.css'

class App extends React.Component{
    render(){
        return(
            <>
           <Navbar/>
           <Jumbotron/>
           <div className="textAlign">
                <p>
                    All the weather data is provided:
                </p>
                <p><strong>Coordinates, Weather Conditions, Temperature, Wind Speed</strong></p>
                <p>From all <strong>PLACES</strong> in the world</p>
                <h4>Pick any place you want to!</h4>
           </div>
           <InputGroup/>
           <hr style={{borderColor: "white"}}/>
           <footer>
               <p style={{color: "white",paddingLeft: "1%"}}>Created by <b>Muskan Lamba</b> &copy;2020</p>
           </footer>
           </>
        );
    }
}
export default App