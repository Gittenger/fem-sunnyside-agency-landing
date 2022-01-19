import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'

const arbStyles = {
  container: {
    backgroundColor: '#fffbf8',
  },
  img: {
    objectFit: 'stretch',
    height: '100%',
    width: '100%',
  },
}

const Transform = () => {
  const { BtnUline } = CIndex
  const {
    img: {
      mobile: { standMob },
      desktop: { standDesk },
    },
  } = images

  return (
    <div
      style={arbStyles.container}
      className="text-black grid grid-cols-1 grid-rows-2 justify-center items-center  sm2:grid-cols-2 sm2:grid-rows-1"
    >
      <picture className="w-full h-full sm2:col-start-1 sm2:col-end-2">
        <source srcSet={standDesk} media="(min-width:750px)" />
        <img src={standMob} alt="" style={arbStyles.img} />
      </picture>
      <div className="flex flex-col justify-center items-center sm2:col-start-2 sm2:col-end-3">
        <h2 className="mt-16 text-3xl font-heading font-bold text-center">
          Stand out to the
          <br />
          right audience
        </h2>
        <p className="mt-6 text-center px-8 font-body">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <BtnUline color="red" />
      </div>
    </div>
  )
}
export default Transform
