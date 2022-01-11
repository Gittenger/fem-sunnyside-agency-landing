import React from 'react'

const arbStyles = {
  img: {
    width: '72px',
  },
}

const UserTest = ({ user }) => {
  return (
    <>
      <img
        src={user.img}
        alt=""
        className="rounded-full"
        style={arbStyles.img}
      />
      <p className="text-center px-8 pt-8 font-body text-greyMd">
        {user.testimonial}
      </p>
      <h3 className="font-black font-heading text-black font-md pt-8">
        {user.name}
      </h3>
      <p className="font-body text-xs text-greyMd pb-20 pt-1.5">{user.title}</p>
    </>
  )
}

export default UserTest
