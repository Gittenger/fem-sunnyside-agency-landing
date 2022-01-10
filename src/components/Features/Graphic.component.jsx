import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'

const arbStyles = {
  bg: {
    backgroundImage: `url(${images.img.mobile.graphicMob})`,
    backgroundPosition: 'top 0 center',
    backgroundSize: 'cover',
    height: '42rem',
  },
}

const Graphic = () => {
  const {} = CIndex

  return (
    <div
      style={arbStyles.bg}
      className="relative w-full flex flex-col justify-center items-center text-blackGr"
    >
      <div className="absolute bottom-16 flex-flex-col justify-center items-center">
        <h2 className="font-bold text-3xl font-heading text-center">
          Graphic Design
        </h2>
        <p className="mt-8 px-8 font-body text-center">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
    </div>
  )
}
export default Graphic
