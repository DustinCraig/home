import React, { Component } from 'react'
import { ExperienceCard } from './experienceCard'
import '../../styles/main.css'

export class Container extends Component {
  renderExperience() {
    return <ExperienceCard title={'FLIR Detection'} />
  }

  render() {
    return (
      <div className='containerContent'>
        <div className='heading'>{this.props.heading}</div>
        {this.props.heading === 'Experience' && this.renderExperience()}
      </div>
    )
  }
}
