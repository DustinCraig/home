import React, { Component } from 'react'
import { LinkedIn } from './linkedin'
import { Github } from './github'

export class SocialButtons extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return ( 
            <React.Fragment>
                <LinkedIn></LinkedIn>
                <Github></Github>
            </React.Fragment>
        )
    }
}