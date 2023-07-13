import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon}from 'react-bootstrap';
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query : ""
        };
    }

    search() {
        console.log("this.state.", this.state);
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        console.log("FETCH_URL", FETCH_URL);
        fetch(FETCH_URL, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => console.log('json', json));
    }

    render() {
        return (
            <div className='App'>
                <div className='App-Title'>Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl type='text' placeholder='search from artist' 
                            value={this.state.query}
                            onChange={(e) => this.setState({"query": e.target.value})}
                            onKeyPress={
                                e => {
                                    if (e.key === 'Enter') {
                                        this.search();
                                    }
                                }
                            }
                        />
                        <InputGroup.Addon>
                            <Glyphicon glyph='search'></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className='Profile'>
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className='Gallery'>
                    Gallery
                </div>
            </div>
        );
    }
}

export default App;


// export const App = React.createClass({
//     render() {
//         return (
//             <div>Music Master</div>
//         );
//     }
// });
