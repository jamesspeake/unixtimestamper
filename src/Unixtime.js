import React, { Component } from 'react';

class Unixtime extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    render() {
        return (
            <div>
            <h1>{ Math.round(this.state.date.getTime() / 1000) }</h1>
            <p>({ this.state.date.toString() })</p>
            </div>
        );
    }
}

export default Unixtime;