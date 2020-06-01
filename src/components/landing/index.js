import React, { Component } from 'react'
import { SocialButtons } from '../socialButtons'
import Image from '../../assets/images/Landing.png'
import './landing.css'

export class Landing extends Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <div className="LandingContainer" style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
                <h2 className="LandingHeader">Dustin Craig</h2>   
                <h3 className="LandingSubHeader">Software Engineer</h3>
                <footer className="SocialButtonsContainer"> 
                    <SocialButtons />
                </footer>
           </div>
        )
    }
}