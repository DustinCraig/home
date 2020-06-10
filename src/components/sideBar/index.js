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
                <SideBarItem text="Home" />
                <SideBarItem text="Experience" />
                <SideBarItem text="About" />
                <SideBarItem text="Projects" />
                <SideBarItem text="Contact" />
            </div>
        )
    }
}