import React from 'react'

import headerMobile from './img/mobile/image-header.jpg'
import transformMob from './img/mobile/image-transform.jpg'
import standMob from './img/mobile/image-stand-out.jpg'
import graphicMob from './img/mobile/image-graphic-design.jpg'
import photoMob from './img/mobile/image-photography.jpg'
import emilyImg from './img/image-emily.jpg'
import jennieImg from './img/image-jennie.jpg'
import thomasImg from './img/image-thomas.jpg'
import arrowDown from './icons/icon-arrow-down.svg'
import coneMobile from './img/mobile/image-gallery-cone.jpg'
import milkMobile from './img/mobile/image-gallery-milkbottles.jpg'
import orangeMobile from './img/mobile/image-gallery-orange.jpg'
import sugarMobile from './img/mobile/image-gallery-sugar-cubes.jpg'
import logoImg from './icons/logo.svg'
import { ReactComponent as LogoFill } from './icons/logo.svg'
import { ReactComponent as Facebook } from './icons/icon-facebook.svg'
import { ReactComponent as Instagram } from './icons/icon-instagram.svg'
import { ReactComponent as Pinterest } from './icons/icon-pinterest.svg'
import { ReactComponent as Twitter } from './icons/icon-twitter.svg'

export const images = {
  img: {
    user: {
      emilyImg,
      jennieImg,
      thomasImg,
    },
    mobile: {
      headerMobile,
      transformMob,
      standMob,
      graphicMob,
      photoMob,
      coneMobile,
      milkMobile,
      orangeMobile,
      sugarMobile,
    },
  },
  svg: {
    arrowDown,
    logoImg,
    LogoFill,
    Facebook,
    Instagram,
    Pinterest,
    Twitter,
  },
  tiny: {},
}

export default images
