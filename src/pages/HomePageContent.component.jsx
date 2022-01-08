import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'
import HeaderImg from '../assets/img/mobile/image-header.jpg'
import logoImg from '../assets/icons/logo.svg'

const arbStyles = {
  logo: {
    top: '3.3rem',
  },
}

const HomePageContent = () => {
  const { HamburgerMenu } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center">
        <div className="w-full">
          <img src={HeaderImg} alt="" />
        </div>
        <img
          src={logoImg}
          alt=""
          className="absolute top-14 left-8"
          style={arbStyles.logo}
        />

        <HamburgerMenu />
      </div>
    </>
  )
}

export default HomePageContent
