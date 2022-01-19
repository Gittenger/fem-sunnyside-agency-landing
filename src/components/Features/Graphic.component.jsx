import React from 'react'
import styles from './styles/Graphic.module.css'
import CIndex from '../components.index'

const Graphic = () => {
  const { BgImgCard } = CIndex

  return (
    <BgImgCard
      bgImgClass={styles.bgImg}
      title="Graphic Design"
      text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention"
      color="green"
    />
  )
}
export default Graphic
