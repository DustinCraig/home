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

    this.state = {}
  }

  render() {
    const classes = useStyles()
    return (
      <div
        className="LandingContainer"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
    )
  }
}
