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
      mobile: { standMob },
    },
  } = images

  return (
    <div
      style={arbStyles.container}
      className="text-black flex flex-col justify-center items-center font-body"
    >
      <img src={standMob} alt="" />
      <h2 className="mt-16 text-3xl font-heading font-bold text-center">
        Stand out to the
        <br />
        right audience
      </h2>
      <p className="mt-6 text-center px-8 font-body">
        Using a collaborative formula of designers, researchers, photographers,
        videographers, and copywriters, we’ll build and extend your brand in
        digital places.
      </p>
      <BtnUline color="red" />
    </div>
  )
}
export default Transform
