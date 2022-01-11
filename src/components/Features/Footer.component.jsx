import React from 'react'
import images from '../../assets/img-index.js'
import styles from './styles/Footer.module.css'

const Footer = () => {
  const {
    svg: { LogoFill, Facebook, Instagram, Pinterest, Twitter },
  } = images

  return (
    <div className="bg-cyan-m w-full flex flex-col justify-center items-center pt-14">
      <LogoFill className={styles.logo} />
      <ul className="flex justify-center items-center space-x-14 pt-12 pb-20">
        <li>
          <a href="#" className="text-blackGr hover:text-white duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-blackGr hover:text-white duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-blackGr hover:text-white duration-300">
            Products
          </a>
        </li>
      </ul>
      <ul
        className={`${styles.iconList} flex justify-center items-center space-x-8 pb-20`}
      >
        <li>
          <a href="#">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="#">
            <Instagram />
          </a>
        </li>
        <li>
          <a href="#">
            <Twitter />
          </a>
        </li>
        <li>
          <a href="#">
            <Pinterest />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
