import Image from '../../assets/images/Linkedin.png'
import React from 'react'

export function LinkedIn() {
  return (
    <a
      target='__blank'
      href='https://www.linkedin.com/in/dustin-craig-390b68159/'
      style={{ marginRight: 40 }}
    >
      <img src={Image} style={{ width: 64, height: 64 }} alt='Linked In' />
    </a>
  )
}
