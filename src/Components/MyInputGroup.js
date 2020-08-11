import React from 'react'
import {InputGroup,FormControl,Button,Container,Row,Col} from 'react-bootstrap'
import './MyInputGroup.css'
import axios from 'axios'


class MyInputGroup extends React.Component{
    state={
        query: "delhi",
        submitValue: "",
        linkStart: "http://api.openweathermap.org/data/2.5/weather?q=",
        linkEnd: "&appid=e97db88d61bd0f7f11731de2aaca8cd6&units=metric",
        displayWeather: []        
    }
    componentDidMount(){
        const getData = async () => {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=e97db88d61bd0f7f11731de2aaca8cd6&units=metric`)
            console.log(JSON.stringify(response.data,null,2))
            this.setState({displayWeather: JSON.stringify(response.data,null,2)})
        }
        getData()
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        if(this.state.query !== prevState.query){
            const getData = async () => {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.query}&appid=e97db88d61bd0f7f11731de2aaca8cd6&units=metric`)
                console.log(JSON.stringify(response.data,null,2))
                this.setState({displayWeather: JSON.stringify(response.data,null,2)})
            }
            getData()
        }
    }
    render(){
        return(
            <>
            <div className="container">
                <h1 className="textHead">Try it now!</h1>
                <form onSubmit = { e => {
                    e.preventDefault()
                    this.setState({query: this.state.submitValue})                    
                }}>
            <InputGroup className="mb-1">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                   {this.state.linkStart}
                </InputGroup.Text>
                </InputGroup.Prepend>
               
               
                    <FormControl                 
                        id="basic-url" 
                        aria-describedby="basic-addon3"
                        placeholder = "delhi"
                        onChange = {e => this.updateInputValue(e)}
                    />
               
                
                
                <InputGroup.Append >
                    <Button type="submit" variant="outline-secondary">request</Button>
                </InputGroup.Append>
            </InputGroup>
            </form> 
            <p>Need a hint?try to use name of cities</p>
            <h4 className="result">Result:</h4>
            <div className="container_data">
                <pre>{this.state.displayWeather}</pre>
            </div>
            <div className="wrapper">
            <a href="http://localhost:5000/" target="_blank"><Button type="button" className="glow-on-hover">Watch a demo!</Button></a>
            </div>            
        </div>
        
        
        <Row className="align">
            <Col sm="1" lg="1" md="1"></Col>
            <Col sm="3" lg="3" md="3">
            <h4 className="centerAlign">What is this?</h4>
            <p>The Weather API, or "wapi" (wah-pee)
             is a weather app quantified and programmatically-accessible data source for all the data from the Weather canon universe!</p>
            <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software.
             Then we went and stuck an API on the front so you can access it all!
            </p> 
            </Col>
            <Col sm="3" lg="3" md="3">
                <h4 className="centerAlign">How can I use it?</h4>
                <p>All the data is accessible through our HTTP web API. Consult our documentation if you'd like to get started.</p>
                <p>Helper libraries for popular programming languages are also provided so you can consume wapi in your favourite programming language, in a style that suits you.</p>
            </Col>
            <Col sm="4" lg="4" md="4">
                <h4 className="centerAlign">It's a clone of swapi.co</h4>
                <p>For learning react, I cloned this. I have used react-bootstrap, this is an "unofficial" branch</p>
                <p>This project is open source and you can contribute on <a href="https://github.com/muskaan2lamba/react-bootstrap" target="_blank">GitHub</a>.</p>
            </Col>
            
        </Row>
        
        
        </>
        );
    }
    updateInputValue(e){
        console.log(e.target.value)
        this.setState({submitValue: e.target.value});
    }
}

export default MyInputGroup