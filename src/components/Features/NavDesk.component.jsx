import React from 'react'
import styles from './styles/NavDesk.module.css'

const NavDesk = () => {
  return (
    <div className={`${styles.navDesk} hidden sm:flex absolute right-8 z-50`}>
      <ul className="flex flex-row text-md font-body space-x-9 text-white">
        <li>About</li>
        <li>Services</li>
        <li>Products</li>
        <li className="relative font-heading text-black">
          <span className="bg-white py-3 px-4 rounded-full hover:bg-blue-hover hover:text-white duration-200">
            Contact
          </span>
        </li>
      </ul>
    </div>
  )
}

export default NavDesk
