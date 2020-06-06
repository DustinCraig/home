import React, { Component } from 'react'

export class SideBarItem extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.props.text}</div>    
            </React.Fragment>
        )
    }
}