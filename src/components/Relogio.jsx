import React, { Component } from 'react'
import './Relogio.css'

export default class Relogio extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {

        return (
                <div>
                    <h1>{this.props.nomePais}</h1>
                    {this.state.date.getHours().valueOf()}
                    <section>
                {("0" + (this.state.date.getHours().valueOf())).slice(-2)}:
                {("0" + (this.state.date.getMinutes().valueOf())).slice(-2)}:
                {("0" + (this.state.date.getSeconds().valueOf())).slice(-2)}----
                {(this.state.date.getHours(this.state.date.valueOf()))}
                    </section>
                </div>
        )
    }
}



// APIKEY =   "AIzaSyAqdlXdmoeHnPkIdtHrryoplYDs1yszpvs"