import React, { Component } from 'react'
import { SideBarItem } from '../sideBarItem'

export class SideBar extends Component {
    constructor(props) {
        super(props) 
        this.state = { } 
    }

    render() { 
        return (
            <div style={{position: 'fixed', height: '100%', width: 160, left: 0, top: '2%'}}>
                <SideBarItem text="Experience" />
                <SideBarItem text="About" />
                <SideBarItem text="Projects" />
                <SideBarItem text="Contact" />
            </div>
        )
    }
}