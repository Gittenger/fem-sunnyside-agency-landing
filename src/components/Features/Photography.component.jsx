import React from 'react'
import styles from './styles/Photo.module.css'
import CIndex from '../components.index'

const Photography = () => {
  const { BgImgCard } = CIndex

  return (
    <BgImgCard
      bgImgClass={styles.bgImg}
      title="Photography"
      text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      color="blue"
    />
  )
}

export default Photography
