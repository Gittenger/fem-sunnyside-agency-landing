import React from 'react'
import styles from './styles/BtnUline.module.css'

const BtnUline = ({ color }) => (
  <button
    className={`mt-6 mb-10 font-heading uppercase ${styles.parent} ${
      color === 'yellow' ? 'yellow' : color === 'red' ? 'red' : 'blue'
    }`}
  >
    <div className="tracking-wide">Learn More</div>
    <div
      className={`h-1.5 w-full -mt-1.5 ${
        color === 'yellow'
          ? styles.yellow
          : color === 'red'
          ? styles.red
          : styles.colorDefault
      }`}
    ></div>
  </button>
)

export default BtnUline
