import React from 'react'
import images from '../../assets/img-index.js'

const PicGrid = () => {
  const {
    img: {
      mobile: { coneMobile, orangeMobile, milkMobile, sugarMobile },
    },
  } = images

  return (
    <div className="grid grid-cols-2 grid-rows-2">
      <img src={milkMobile} alt="" />
      <img src={orangeMobile} alt="" />
      <img src={coneMobile} alt="" />
      <img src={sugarMobile} alt="" />
    </div>
  )
}

export default PicGrid
