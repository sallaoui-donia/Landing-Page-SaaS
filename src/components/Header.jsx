import React from 'react'
import { logoApp } from '../assets/index'
import Container from './Container'

const Header = () => {
  return (
    <div className ="border-b border-stroke-1">
        <Container  className={"bg-n-9"}>
    <img src={logoApp}  width={104} height={200} alt="logoAPP" ></img>
    <button >Login</button>
    </Container>
    </div>
  )
}

export default Header