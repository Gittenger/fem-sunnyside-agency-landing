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
      <picture>
        <source srcSet={milkDesk} media="(min-width: 750px)" />
        <img src={milkMobile} alt="" />
      </picture>
      <picture>
        <source srcSet={orangeDesk} media="(min-width: 750px)" />
        <img src={orangeMobile} alt="" />
      </picture>
      <picture>
        <source srcSet={coneDesk} media="(min-width: 750px)" />
        <img src={coneMobile} alt="" />
      </picture>
      <picture>
        <source srcSet={sugarDesk} media="(min-width: 750px)" />
        <img src={sugarMobile} alt="" />
      </picture>
    </div>
  )
}

export default PicGrid
