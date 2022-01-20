import React, { useContext } from 'react'
import styles from './styles/MobileNav.module.css'
import NavContext from '../../contexts/NavContext'

const MobileNav = () => {
  const { navState } = useContext(NavContext)

  return (
    <div
      className={`absolute z-50 flex justify-center items-center py-12 sm:hidden ${
        styles.container
      } ${navState ? styles.active : ''} `}
    >
      <ul
        className={`space-y-8 flex flex-col justify-center items-center text-black font-body text-xl ${styles.list}`}
      >
        <li>
          <a href="#" className="hover:text-blackBl hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blackBl hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blackBl hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
