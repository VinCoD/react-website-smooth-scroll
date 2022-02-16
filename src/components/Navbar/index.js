import styled from 'styled-components'

import React from 'react'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavbarContaner>
            <NavLogo>
                dolla
            </NavLogo>
        </NavbarContaner>
    </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
    background: black;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top:0;
    z-index: 10;
`

const NavbarContaner = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index:;
`