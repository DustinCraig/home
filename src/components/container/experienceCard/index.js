import React, { Component } from 'react'
import '../../../styles/main.css'

export class ExperienceCard extends Component {
  render() {
    return (
      <div className='experienceCard'>
        <div className='experienceCardTitle'>{this.props.title} - </div>
        <p>Software Engineer - Intern</p>
      </div>
    )
  }
}
