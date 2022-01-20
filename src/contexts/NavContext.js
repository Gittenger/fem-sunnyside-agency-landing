import { createContext } from 'react'

export const NavContext = createContext({
  navState: false,
  setNav: () => {},
})

export default NavContext
