import React from 'react'
import images from '../../assets/img-index.js'

const Transform = () => {
  const {
    img: {
      mobile: { transformMob },
    },
  } = images

  return (
    <div>
      <img src={transformMob} alt="" />
    </div>
  )
}
export default Transform
