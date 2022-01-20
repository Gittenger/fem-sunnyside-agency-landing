import React, { useContext } from 'react'
import NavContext from '../../contexts/NavContext'
import styles from './styles/HamburgerMenu.module.css'

const btn = 'cursor-pointer absolute transition duration-500'
const icon = 'transition duration-500 absolute'
const left = ''
const right = ''

const HamburgerMenu = ({ className }) => {
  const { setNav, navState } = useContext(NavContext)

  return (
    <button
      onClick={() => {
        setNav(navState)
      }}
      className={`${btn} ${className} ${styles.parent} ${
        navState ? styles.active : ''
      }`}
    >
      <div className={`${icon} ${left}`}></div>
      <div className={`${icon} ${right}`}></div>
    </button>
  )
}

export default HamburgerMenu
