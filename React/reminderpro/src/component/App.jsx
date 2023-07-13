import React, { Component } from 'react';
import { connect } from 'react-redux';
// connect function works by hooking two function to react component. The first connects a map dispatch props function
// and the map dispatch to props function.
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : ''
        }
    }

    addReminder() {
        // console.log('this', this);
        this.props.addReminder(this.state.text);
    }

    render() {
        return (
            <div className='App'>
                <div className='title'>
                    Reminder Pro
                </div>
                <div className='form-inline'>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            placeholder='I have to ...'
                            onChange={(event) => this.setState({text : event.target.value})}
                        />
                    </div>
                    <button type='button' className='btn btn-success' onClick={() => this.addReminder()}>
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}

// redux : reminder change a state that will change the whole store. We need a reminder action that can update the whole story.

// redux Actions : plains javascript.
// {
//     // what kind of action is being performed.
//     type : 'ADD_REMINDER',
//     // necessory info within javascript object which can be used to update the store.
//     payload : data
// }

// we should use action creator.

// creat provider-component from react reading that were passed down from the store to the whole application.

// in the redux all the applications exists as a store or single object. what the reducer do is take the state in an action and return to state.

// stores, reducers and providers. The purpose is chaning the application state with redux.

// map dispatch prompts essentially does is bind action creaters we create to the overall dispach function
// throughout our whole react redux application make it accessible as props within the specific components.

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder}, dispatch);
}

// export default connect(null, mapDispatchToProps)(App);
export default connect(null, {addReminder})(App);