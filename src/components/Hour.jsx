import React from "react"


export default class FetchHour extends React.Component {
  constructor(props) {
    super(props)

  }

  state = {
    // temp: null,
    // locale: null,         // pt-br
    hour: null
  };

  /* async */ componentDidMount() {

    // const url = "https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810,-119.6822510&timestamp=1331161200&key=AIzaSyAqdlXdmoeHnPkIdtHrryoplYDs1yszpvs";
    // const response = await fetch(url);
    // const data = await response.json();
    // this.setState({temp: data.dstOffset})



    // var moment = require('moment');
    // moment.locale();
    var moment = require('moment-timezone');
moment().tz("America/Los_Angeles").format();
  /*   moment().format('LT');
    console.log(moment.locale()) */
    // var newYork = moment.tz("2014-06-01 12:00", "America/Sao_Paulo");
    // var losAngeles = newYork.clone().tz("America/Los_Angeles");
    // var london = newYork.clone().tz("Europe/London");

    // newYork.format();    // 2014-06-01T12:00:00-04:00
    // losAngeles.format(); // 2014-06-01T09:00:00-07:00
    // london.format();     // 2014-06-01T17:00:00+01:00
    // moment.tz.setDefault("America/New_York").locale('pt-br');
    const saoPaulo =moment.tz( "America/Sao_Paulo").format('HH:mm')
    const sydney=moment.tz( "Australia/Sydney").format('HH:mm')
    const london=moment.tz( "Europe/London").format('HH:mm')
    const lisbon=moment.tz( "Europe/Lisbon").format('HH:mm')

    console.log(saoPaulo)
    console.log(sydney)
    console.log(london)
    console.log(lisbon)

    const timeZone = this.props.timeZone

    // console.log(moment.tz( "America/Sao_Paulo").format('LT'))
    // console.log(moment.tz( "Australia/Sydney").format('LT'))
    // console.log(moment.tz("2014-06-01 12:00", "Europe/London"))
    // console.log(moment.tz("2014-06-01 12:00", "Europe/Lisbon"))
    this.setState({


      // locale: moment.locale('pt-br'),         // pt-br
      hour: moment.tz( timeZone ).format('HH:mm')


    }
    )
  }



  render() {
    return (
      <div>
        {this.state.hour}
      </div>
    )
  }

}

