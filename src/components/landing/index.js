import React, { Component } from 'react'
import { SocialButtons } from '../socialButtons'
import { SideBar } from '../sideBar'
import { Container } from '../container'
import { ContainerCentered } from '../containerCentered'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { HIDESIDEBARWIDTH } from '../../constants'
import Image from '../../assets/images/Landing.png'
import './landing.css'

export class Landing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            homeOpen: true,
            experienceOpen: false,
            aboutOpen: false,
            projectsOpen: false,
            contactOpen: false,
            sideBarOpen: true,
        }
        this.updateDimensions.bind(this)
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    updateDimensions = () => {
        if (window.innerWidth < HIDESIDEBARWIDTH)
            this.setState({ sideBarOpen: false })
        else this.setState({ sideBarOpen: true })
    }

    sideBarItemClick = (item) => {
        switch (item) {
            case 'Home':
                this.setState({
                    homeOpen: true,
                    experienceOpen: false,
                    aboutOpen: false,
                    projectsOpen: false,
                    contactOpen: false,
                })
                break
            case 'Experience':
                this.setState({
                    homeOpen: false,
                    experienceOpen: true,
                    aboutOpen: false,
                    projectsOpen: false,
                    contactOpen: false,
                })
                break
            case 'About':
                this.setState({
                    homeOpen: false,
                    experienceOpen: false,
                    aboutOpen: true,
                    projectsOpen: false,
                    contactOpen: false,
                })
                break
            case 'Projects':
                this.setState({
                    homeOpen: false,
                    experienceOpen: false,
                    aboutOpen: false,
                    projectsOpen: true,
                    contactOpen: false,
                })
                break
            case 'Contact':
                this.setState({
                    homeOpen: false,
                    experienceOpen: false,
                    aboutOpen: false,
                    projectsOpen: false,
                    contactOpen: true,
                })
                break
            default:
                break
        }
    }

    render() {
        return (
            <div
                className='LandingContainer'
                style={{
                    backgroundImage: `url(${Image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {!this.state.sideBarOpen && (
                    <div className='hamburgerIconContainer'>
                        {/* For some reason this has to be styled inline? */}
                        <FontAwesomeIcon
                            style={{ width: 40, height: 40 }}
                            icon={faBars}
                        />
                    </div>
                )}

                {this.state.sideBarOpen && (
                    <React.Fragment>
                        <div className='containerLeft'>
                            <SideBar sideBarItemClick={this.sideBarItemClick} />
                        </div>
                    </React.Fragment>
                )}
                <div
                    className={`containerRight ${
                        this.state.homeOpen === true ? 'easeIn' : 'easeOut'
                    }`}
                >
                    <ContainerCentered
                        heading={'Dustin Craig'}
                        subHeading={'Software Engineer'}
                        footer={<SocialButtons />}
                    />
                </div>
                <div
                    className={`containerRight ${
                        this.state.experienceOpen === true
                            ? 'easeIn'
                            : 'easeOut'
                    }`}
                >
                    <Container heading={'Experience'} />
                </div>
                <div
                    className={`containerRight ${
                        this.state.aboutOpen === true ? 'easeIn' : 'easeOut'
                    }`}
                >
                    <Container heading={'About'} />
                </div>
                <div
                    className={`containerRight ${
                        this.state.projectsOpen === true ? 'easeIn' : 'easeOut'
                    }`}
                >
                    <Container heading={'Projects'} />
                </div>
                <div
                    className={`containerRight ${
                        this.state.contactOpen === true ? 'easeIn' : 'easeOut'
                    }`}
                >
                    <Container heading={'Contact'} />
                </div>
            </div>
        )
    }
}
