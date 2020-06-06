import React, { Component } from 'react'
import { SideBarItem } from '../sideBarItem'

export class SideBar extends Component {
    constructor(props) {
        super(props) 
        this.state = { } 
    }

    render() { 
        return (
            <div style={{position: 'fixed', height: '100%', width: 160, left: 0, top: 0}}>
                <SideBarItem text="projects" />
            </div>
        )
    }
}