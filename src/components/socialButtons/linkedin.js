import Image from '../../assets/images/LI-In-Bug.png'
import React from 'react'

export function LinkedIn() {
    return (
        <a target="__blank" href="https://www.linkedin.com/in/dustin-craig-390b68159/">
            <img src={Image} style={{width: 64, height: 50}} alt="Linked In" />
        </a>
        
    )
}