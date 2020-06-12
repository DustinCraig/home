import React, { Component } from 'react'
import { LinkedIn } from './linkedin'
import { Github } from './github'

export class SocialButtons extends Component {
  render() {
    return (
      <React.Fragment>
        <LinkedIn></LinkedIn>
        <Github></Github>
      </React.Fragment>
    )
  }
}
