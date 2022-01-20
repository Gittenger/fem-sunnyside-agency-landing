import React from 'react'
import styles from './styles/UserTest.module.css'

const arbStyles = {
  img: {
    width: '72px',
  },
}

const UserTest = ({ user }) => {
  return (
    <div
      className={`grid grid-cols-1 gap-0.5 place-content-center justify-items-center items-start ${styles.grid}`}
    >
      <img
        src={user.img}
        alt=""
        className="rounded-full"
        style={arbStyles.img}
      />
      <p className="text-center px-6 pb-6 sm2:pb-0 xs:px-14 sm:px-20 sm2:px-3 pt-5 xl:px-24 font-body text-greyMd">
        {user.testimonial}
      </p>
      <h3 className="font-black font-heading text-black font-md">
        {user.name}
      </h3>
      <p className="font-body text-xs text-greyMd">{user.title}</p>
    </div>
  )
}

export default UserTest
