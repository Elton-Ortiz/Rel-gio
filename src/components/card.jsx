import React, { Component } from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Hour from './Hour.jsx'
import Temperature from './Temperature.jsx'
import './card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="card container">
                <div className="cardItem">
                    <h2>
                        São Paulo
                    </h2>
                    <Hour timeZone="America/Sao_Paulo" />
                    <Temperature countryId="3448439" />
                </div>
                <div className="cardItem">
                    <h2>Londres
                    </h2>
                    <Hour timeZone="Europe/London" />
                    <Temperature countryId="2643743" />
                </div>
                <div className="cardItem">
                    <h2>
                        Lisboa
                    </h2>
                    <Hour timeZone="Europe/Lisbon" />
                    <Temperature countryId="2267057" />
                </div>
                <div className="cardItem">
                    <h2>
                        Australia
                    </h2>
                    <Hour timeZone="Australia/Sydney" />
                    <Temperature countryId="2158177" />
                </div>

            </div>

        )
    }

}
