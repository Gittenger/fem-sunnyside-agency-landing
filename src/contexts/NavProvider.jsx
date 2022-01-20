import React, { useState } from 'react'
import NavContext from './NavContext'

export const NavProvider = ({ children }) => {
  const [navState, setNavState] = useState(false)
  const setNav = (navState) => {
    setNavState(!navState)
  }

  return (
    <NavContext.Provider value={{ navState, setNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider
