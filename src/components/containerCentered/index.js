import React, { Component } from 'react'
import '../../styles/main.css'

export class ContainerCentered extends Component {
    render() {
        return (
            <div className='containerContentCentered'>
                <div className='heading'>{this.props.heading}</div>
                <div className='subHeading'>{this.props.subHeading}</div>
                {this.props.footer && (
                    <div style={{ marginTop: 70 }}>{this.props.footer}</div>
                )}
            </div>
        )
    }
}
