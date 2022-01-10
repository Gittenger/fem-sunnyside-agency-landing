import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'

const arbStyles = {
  container: {
    backgroundColor: '#fffbf8',
  },
}

const Transform = () => {
  const { BtnUline } = CIndex
  const {
    img: {
      mobile: { transformMob },
    },
  } = images

  return (
    <div
      style={arbStyles.container}
      className="text-black flex flex-col justify-center items-center"
    >
      <img src={transformMob} alt="" />
      <h2 className="mt-16 text-3xl font-heading font-bold text-center">
        Transform your <br /> brand
      </h2>
      <p className="mt-6 text-center px-8 font-body">
        We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you.
      </p>
      <BtnUline color="yellow" />
    </div>
  )
}
export default Transform
