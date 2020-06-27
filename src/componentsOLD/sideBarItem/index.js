import React, { Component } from 'react'
import '../../styles/main.css'

export class SideBarItem extends Component {

  render() {
    return (
      <React.Fragment>
        <div className='sideBarItem'>
          <a
            href='#'
            onClick={(e) => {
              this.props.sideBarItemClick(this.props.text)
            }}
          >
            {this.props.text}
          </a>
        </div>
      </React.Fragment>
    )
  }
}