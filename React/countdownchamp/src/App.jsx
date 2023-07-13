import React, { Component } from 'react';
import './App.css';
import Clock from './Clock.jsx';
import { Form , FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline : "December 26, 2018",
            newDeadline : ""
        }
    }

    // The golden rule of React: never mutate state directly. 
    //I can’t repeat this enough. 
    //In order to change your state data, 
    //you can’t manipulate it like you would with normal variables. 
    //For example, something like `x++` or `counter += 1` would be fine in any other case. 
    // But in order to update state, 
    // you must use the setState() function and have new instances of data.
    changeDeadline() {
        console.log(this.state);
        this.setState({
            // deadline : "November 26, 2018"
            deadline : this.state.newDeadline
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline} />
                <Form inline>
                    <FormControl placeholder="new data" className='Deadline-input' onChange={
                        (event) => {
                            this.setState({
                                newDeadline : event.target.value
                            });
                        }
                    }/>
                    <Button onClick={()=>this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
            
        );
    }
}

export default App;