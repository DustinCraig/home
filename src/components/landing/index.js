import React, { Component } from 'react'
import Layout from '../layout'
import Image from '../../assets/images/Landing.png'
import './landing.css'

export class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Layout />
        {/* <div
          className='LandingContainer'
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        ></div> */}
      </React.Fragment>
    )
  }
}
