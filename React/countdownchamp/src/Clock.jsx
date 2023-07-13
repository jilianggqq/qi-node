import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds : 0
        };
        console.log("this.props", this.props);
    }

    // runs before the component completely renders onto the application.
    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        // setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
        // must pay attention to below!!!
        // in the anonimous function, this here is window.
        let that = this;
        setInterval(function() {
            // console.log(this);
            console.log(that);
            that.getTimeUntil(that.props.deadline);
        }, 1000);
    }

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        // const time = new Date(deadline) - new Date();
        const time = Date.parse(deadline) - Date.parse(new Date());
        const days = Math.floor(time / (1000 * 24 * 60 * 60));
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const minutes = Math.floor(time / (1000 * 60) % 60);
        const seconds = Math.floor(time / (1000) % 60);
        // console.log("days", days, "hours", hours, "minutes", minutes, "seconds", seconds);
        this.setState({
            days : days,
            hours : hours,
            minutes : minutes,
            seconds : seconds
        });
    }

    render() {
        // this.getTimeUntil(this.props.deadline);
        return (
            <div>
                <div className='App-days'>{this.leading0(this.state.days)} days</div>
                <div className='App-hours'>{this.leading0(this.state.hours)} hours</div>
                <div className='App-minutes'>{this.leading0(this.state.minutes)} minutes</div>
                <div className='App-seconds'>{this.leading0(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;
