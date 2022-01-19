import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const {
    Header,
    Transform,
    Stand,
    Graphic,
    Photography,
    Testimonials,
    PicGrid,
    Footer,
  } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center">
        <Header />
        <div className="grid grid-cols-1 sm2:grid-rows-2">
          <Transform />
          <Stand />
        </div>
        <div className="grid grid-cols-1 sm2:grid-cols-2 w-full">
          <Graphic />
          <Photography />
        </div>
        <Testimonials />
        <PicGrid />
        <Footer />
      </div>
    </>
  )
}

export default HomePageContent
