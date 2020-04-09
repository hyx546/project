import React, { Component } from 'react'
import logoImg from './timg.jpg'
import './logo.css'

export class Logo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logoImg}  alt=""/>
      </div>
    )
  }
}

export default Logo
