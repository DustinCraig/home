import React, { Component } from 'react'
import '../../styles/main.css'

export class SideBarItem extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <React.Fragment>
                <div className="sideBarItem"><a href="#">{this.props.text}</a></div>    
            </React.Fragment>
        )
    }
}