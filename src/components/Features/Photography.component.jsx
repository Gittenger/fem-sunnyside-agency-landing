import React from 'react'
import styles from './styles/Graphic.module.css'

const Photography = () => {
  return (
    <div
      className={`relative w-full flex flex-col justify-center items-center text-blackBl ${styles.bg} ${styles.bgPhoto}`}
    >
      <div className="absolute bottom-16 sm:bottom-32 flex-flex-col justify-center items-center">
        <h2 className="font-bold text-3xl font-heading text-center">
          Photography
        </h2>
        <p className="mt-8 px-8 xs:px-16 sm:px-28 font-body text-center">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  )
}

export default Photography
