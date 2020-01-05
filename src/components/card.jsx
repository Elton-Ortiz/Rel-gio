import React, { Component } from 'react'
import Relogio from './Relogio.jsx'

import Hour from './Hour.jsx'
import Temperature from './Temperature.jsx'
import './card.css'

export default class Card extends Component {
    render() {
        return (
            <div className="card">
                <div>
                    <h1>
                        São Paulo
                    </h1>
                    <Hour timeZone="America/Sao_Paulo" />
                    <Temperature countryId="3448439" />
                </div>
                <div>
                    <h1>
                        Londres
                    </h1>
                    <Hour timeZone="Europe/London" />
                    <Temperature countryId="2643743" />
                </div>
                <div>
                    <h1>
                        Lisboa
                    </h1>
                    <Hour timeZone="Europe/Lisbon" />
                    <Temperature countryId="2267057" />
                </div>

                <div>
                    <h1>
                        Australia
                    </h1>
                    <Hour timeZone="Australia/Sydney" />
                    <Temperature countryId="2158177" />
                </div>

            </div>

        )
    }

}
