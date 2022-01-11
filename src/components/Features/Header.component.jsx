import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'
import styles from './styles/Header.module.css'

const arbStyles = {
  logo: {
    top: '3.3rem',
  },
  headerText: {
    color: '#fffff3',
    fontSize: '2.6rem',
  },
}

const Header = () => {
  const { HamburgerMenu } = CIndex
  const {
    img: {
      mobile: { headerMobile },
    },
    svg: { arrowDown, logoImg },
  } = images

  return (
    <>
      <div className="w-full z-0">
        <img src={headerMobile} alt="" />
      </div>
      <img
        src={logoImg}
        alt=""
        className="absolute top-14 left-8 z-50"
        style={arbStyles.logo}
      />

      <HamburgerMenu className="z-50" />

      <div className="absolute grid place-content-center place-items-center pt-36 xs:pt-52 sm:pt-64 w-full">
        <h1
          className="text-5xl uppercase tracking-widest leading-snug font-heading font-black text-center xs:px-14 sm:px-32"
          style={arbStyles.headerText}
        >
          We are Creatives
        </h1>
        <img src={arrowDown} alt="" className="text-center self-center mt-8" />
      </div>
    </>
  )
}

export default Header
