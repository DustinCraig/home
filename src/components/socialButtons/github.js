import Image from '../../assets/images/Github.png'
import React from 'react'

export function Github() {
    return (
        <a target="__blank" href="https://www.github.com/DustinCraig/">
            <img src={Image} style={{width: 64, height: 64}} alt="Github" />
        </a>
        
    )
}