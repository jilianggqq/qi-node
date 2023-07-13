// import React, { Component } from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn : true
        }

        // This binding is necessary to make `this` work in the callback
        // this.switch = this.switch.bind(this);
    }

    // You have to be careful about the meaning of this in JSX callbacks. 
    // In JavaScript, class methods are not bound by default.
    // If you forget to bind this.handleClick and pass it to onClick, 
    // this will be undefined when the function is actually called.
    switch() {
        console.log(this);
        this.setState((preState) => {
            if (preState.isOn) {
                return {isOn : false};
            } else {
                return {isOn : true};
            }
        });
    }

    render() {
        return (
            // <div>Toggle</div>
            // Generally, if you refer to a method without () after it, 
            // such as onClick={this.handleClick}, you should bind that method.
                // <button onClick={this.switch}>Toggle</button>
            <div>
                <button onClick={(e) => this.switch(e)}>Toggle</button>
                {this.state.isOn ? 'ON' : 'OFF'}
            </div>
        );
    }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
