import React from 'react'

const UserTest = ({ user }) => {
  return (
    <div>
      <img src={user.img} alt="" />
      <p>{user.testimonial}</p>
      <h3>{user.name}</h3>
      <p>{user.title}</p>
    </div>
  )
}

export default UserTest
