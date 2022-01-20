import React, { useContext } from 'react'
import styles from './styles/MobileNav.module.css'
import NavContext from '../../contexts/NavContext'

const MobileNav = () => {
  const { navState } = useContext(NavContext)

  return (
    <div
      className={`absolute z-50 ${styles.container} ${
        navState ? styles.active : ''
      } `}
    >
      <h1>hello</h1>
    </div>
  )
}

export default MobileNav
