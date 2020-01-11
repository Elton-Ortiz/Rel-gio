import React from "react"
import "./Hour.css"


export default class FetchHour extends React.Component {


  state = {
    hour: null
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
    var moment = require('moment-timezone');
    moment().tz("America/Los_Angeles").format();

    const timeZone = this.props.timeZone


    this.setState({
      hour: moment.tz(timeZone).format('HH:mm:ss')
    }
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var moment = require('moment-timezone');
    moment().tz("America/Los_Angeles").format();

    const timeZone = this.props.timeZone
    this.setState({
      hour: moment.tz(timeZone).format('HH:mm:ss')
    }
    )
  }

  render() {
    return (
      <div id="hour">
        {this.state.hour}
      </div>
    )
  }

}

