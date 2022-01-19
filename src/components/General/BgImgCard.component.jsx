import React from 'react'
import styles from './styles/BgImgCard.module.css'

const BgImgCard = ({ title, text, bgImgClass, color }) => {
  return (
    <div
      className={`relative w-full flex flex-col justify-center items-center ${
        color === 'green'
          ? 'text-blackGr'
          : color === 'blue'
          ? 'text-blackBl'
          : 'text-black'
      } ${styles.bg} ${bgImgClass}`}
    >
      <div className="absolute bottom-16 sm:bottom-32 sm2:top-96 xl:top-100 flex-flex-col justify-center items-center">
        <h2 className="font-bold text-3xl font-heading text-center">{title}</h2>
        <p className="mt-8 px-8 xs:px-16 sm:px-28 sm2:px-16 lg:px-28 font-body text-center">
          {text}
        </p>
      </div>
    </div>
  )
}
export default BgImgCard
