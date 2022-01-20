import React from 'react'
import images from '../../assets/img-index.js'
import styles from './styles/PicGrid.module.css'

const PicGrid = () => {
  const {
    img: {
      mobile: { coneMobile, orangeMobile, milkMobile, sugarMobile },
      desktop: { coneDesk, orangeDesk, milkDesk, sugarDesk },
    },
  } = images

  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 sm2:grid-cols-4 sm2:grid-rows-1 w-full ${styles.grid}`}
    >
      <img src={milkMobile} alt="" />
      <img src={orangeMobile} alt="" />
      <img src={coneMobile} alt="" />
      <img src={sugarMobile} alt="" />
    </div>
  )
}

export default PicGrid
