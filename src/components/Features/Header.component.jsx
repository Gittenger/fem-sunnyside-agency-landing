import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'
import NavProvider from '../../contexts/NavProvider.jsx'

const arbStyles = {
  logo: {
    top: '3.3rem',
    left: '28px',
  },
  headerText: {
    color: '#fffff3',
    fontSize: '2.6rem',
  },
}

const Header = () => {
  const { HamburgerMenu, NavDesk, MobileNav } = CIndex
  const {
    img: {
      mobile: { headerMobile },
      desktop: { headerDesk },
    },
    svg: { arrowDown, logoImg },
  } = images

  return (
    <>
      <div className="w-full z-0">
        <picture>
          <source srcSet={headerDesk} media="(min-width: 750px)" />
          <img src={headerMobile} alt="" />
        </picture>
      </div>
      <img
        src={logoImg}
        alt=""
        className="absolute top-14 z-50"
        style={arbStyles.logo}
      />

      <NavProvider>
        <HamburgerMenu className="z-50 sm:hidden" />
        <NavDesk />
        <MobileNav />
      </NavProvider>

      <div className="absolute grid place-content-center place-items-center pt-36 xs:pt-52 sm:pt-64 w-full sm2:pt-40 md:pt-60">
        <h1
          className="text-5xl uppercase tracking-widest leading-snug font-heading font-black text-center xs:px-14 sm:px-32 sm2:px-20"
          style={arbStyles.headerText}
        >
          We are Creatives
        </h1>
        <img
          src={arrowDown}
          alt=""
          className="text-center self-center mt-8 md:mt-20"
        />
      </div>
    </>
  )
}

export default Header
