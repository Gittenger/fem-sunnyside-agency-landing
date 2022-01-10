import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'

const arbStyles = {
  bg: {
    backgroundImage: `url(${images.img.mobile.photoMob})`,
    backgroundPosition: 'top 0 center',
    backgroundSize: 'cover',
    height: '42rem',
  },
}

const Photography = () => {
  const {} = CIndex

  return (
    <div
      style={arbStyles.bg}
      className="relative w-full flex flex-col justify-center items-center text-blackBl"
    >
      <div className="absolute bottom-16 flex-flex-col justify-center items-center">
        <h2 className="font-bold text-3xl font-heading text-center">
          Photography
        </h2>
        <p className="mt-8 px-8 font-body text-center">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  )
}

export default Photography
