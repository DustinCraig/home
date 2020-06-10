import React, { Component } from 'react'
import { SocialButtons } from '../socialButtons'
import { SideBar } from '../sideBar'
import { Container } from '../container'
import Image from '../../assets/images/Landing.png'
import './landing.css'

export class Landing extends Component {
    constructor(props) {
        super(props) 
        this.sideBarItemClick.bind(this)

        this.state = {
            experienceOpen: false, 
            aboutOpen: false, 
            projectsOpen: false, 
            contactOpen: false 
        }
    }

    sideBarItemClick = (item) => {
        switch(item) {
            case 'experience':
                this.setState({experienceOpen: !this.state.experienceOpen})
                break 
            case 'about':
                this.setState({aboutOpen: !this.state.aboutOpen})
                break 
            case 'projects':
                this.setState({projectsOpen: !this.state.projectsOpen})
                break 
            case 'contact':
                this.setState({contactOpen: !this.state.contactOpen})
        }
    }

    render() {
        return (
            <div className="LandingContainer" style={{backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat'}}>
                <div className="containerLeft">
                <SideBar />
                </div>
                <div className="containerRight">
                    <div className="containerContent">
                        <div className="heading">Dustin Craig</div>
                        <div className="subHeading">Software Engineer</div>
                    </div>
                </div>
                
           </div>
        )
    }
}