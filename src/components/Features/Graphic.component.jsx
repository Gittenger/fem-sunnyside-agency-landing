import React from 'react'
import CIndex from '../components.index.js'
import styles from './styles/Graphic.module.css'

const Graphic = () => {
  const {} = CIndex

  return (
    <div
      className={`relative w-full flex flex-col justify-center items-center text-blackGr ${styles.bg} ${styles.bgGraphic}`}
    >
      <div className="absolute bottom-16 sm:bottom-32 flex-flex-col justify-center items-center">
        <h2 className="font-bold text-3xl font-heading text-center">
          Graphic Design
        </h2>
        <p className="mt-8 px-8 xs:px-16 sm:px-28 font-body text-center">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
    </div>
  )
}
export default Graphic
