import React, { Component } from 'react'
import { SideBarItem } from '../sideBarItem'

export class SideBar extends Component {
    constructor(props) {
        super(props) 
        this.state = { } 
    }



    render() { 
        return (
            <div style={{height: '100%', width: '30%', left: 0, top: '2%'}}>
                <SideBarItem sideBarItemClick={this.props.sideBarItemClick} text="Home" />
                <SideBarItem sideBarItemClick={this.props.sideBarItemClick} text="Experience" />
                <SideBarItem sideBarItemClick={this.props.sideBarItemClick} text="About" />
                <SideBarItem sideBarItemClick={this.props.sideBarItemClick} text="Projects" />
                <SideBarItem sideBarItemClick={this.props.sideBarItemClick} text="Contact" />
            </div>
        )
    }
}