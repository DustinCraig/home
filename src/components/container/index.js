import React, { Component } from 'react'
import '../../styles/main.css'

export class Container extends Component {
    render() {
        return (
            <div className='containerContent'>
                <div className='heading'>{this.props.heading}</div>
            </div>
        )
    }
}
