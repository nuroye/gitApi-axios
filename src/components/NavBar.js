import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const NavBar = () => {
  return (
    
      <Navbar sticky='top' bg='primary' variant='dark'>
        <Container>
            <Navbar.Brand href='#home'>Git Users</Navbar.Brand>
        </Container>
      </Navbar>
    
  )
}

export default NavBar
