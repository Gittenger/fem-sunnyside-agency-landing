import React from 'react'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'

const arbStyles = {
  heading: {
    letterSpacing: '.2em',
  },
}

const Testimonials = () => {
  const { UserTest } = CIndex

  return (
    <div className="pt-14 lg:pt-20 xl:pt-32 flex flex-col justify-center items-center pb-32 lg:pb-48 xl:pb-56">
      <h3
        className="text-greyLt text-md font-black font-heading uppercase pb-14"
        style={arbStyles.heading}
      >
        Client Testimonials
      </h3>

      <div className="flex flex-col sm2:flex-row space-y-24 sm2:space-y-0 sm2:space-x-3 justify-center items-center px-16 md:px-24">
        <UserTest user={userData.emily} />
        <UserTest user={userData.thomas} />
        <UserTest user={userData.jennie} />
      </div>
    </div>
  )
}

const {
  img: {
    user: { emilyImg, jennieImg, thomasImg },
  },
} = images

const userData = {
  emily: {
    img: emilyImg,
    testimonial:
      'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    name: 'Emily R.',
    title: 'Marketing Director',
  },
  jennie: {
    img: jennieImg,
    testimonial:
      'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    name: 'Jennie F.',
    title: 'Business Owner',
  },
  thomas: {
    img: thomasImg,
    testimonial:
      'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    name: 'Thomas S.',
    title: 'Chief Operating Officer',
  },
}

export default Testimonials
