import React, { Component } from 'react'
import { SocialButtons } from '../socialButtons'
import { SideBar } from '../sideBar'
import { Container } from '../container'
import Image from '../../assets/images/Landing.png'
import './landing.css'

export class Landing extends Component {
    constructor(props) {
        super(props) 
       // this.sideBarItemClick.bind(this)

        this.state = {
            homeOpen: true, 
            experienceOpen: false, 
            aboutOpen: false, 
            projectsOpen: false, 
            contactOpen: false 
        }
    }

    sideBarItemClick = (item) => {
        switch(item) {
            case 'Home':
                this.setState({homeOpen: true, experienceOpen: false, aboutOpen: false, projectsOpen: false, contactOpen: false})
                break
            case 'Experience':
                this.setState({homeOpen: false, experienceOpen: true, aboutOpen: false, projectsOpen: false, contactOpen: false})
                break 
            case 'About':
                this.setState({homeOpen: false, experienceOpen: false, aboutOpen: true, projectsOpen: false, contactOpen: false})
                break 
            case 'Projects':
                this.setState({homeOpen: false, experienceOpen: false, aboutOpen: false, projectsOpen: true, contactOpen: false})
                break 
            case 'Contact':
                this.setState({homeOpen: false, experienceOpen: false, aboutOpen: false, projectsOpen: false, contactOpen: true })
        }
    }

    render() {
        console.log(this.state.homeOpen)
        return (
            <div className="LandingContainer" style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
                <div className="containerLeft">
                <SideBar sideBarItemClick={this.sideBarItemClick} />
                </div>
                <div className={`containerRight ${this.state.homeOpen===true?'easeIn':'easeOut'}`}>
                    <div className="containerContent">
                        <div className="heading">Dustin Craig</div>
                        <div className="subHeading">Software Engineer</div>
                    </div>
                </div>
                <div className={`containerRight ${this.state.experienceOpen===true?'easeIn':'easeOut'}`}>
                    <div className="containerContent">
                        <div className="heading">Experience</div>
                    </div>
                </div>
                <div className={`containerRight ${this.state.aboutOpen===true?'easeIn':'easeOut'}`}>
                    <div className="containerContent">
                        <div className="heading">About</div>
                    </div>
                </div>
                <div className={`containerRight ${this.state.projectsOpen===true?'easeIn':'easeOut'}`}>
                    <div className="containerContent">
                        <div className="heading">Projects</div>
                    </div>
                </div>
                <div className={`containerRight ${this.state.contactOpen===true?'easeIn':'easeOut'}`}>
                    <div className="containerContent">
                        <div className="heading">Contact</div>
                    </div>
                </div>
                
           </div>
        )
    }
}