import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const { Header, Transform, Stand, Graphic, Photography } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center">
        <Header />
        <Transform />
        <Stand />
        <Graphic />
        <Photography />
      </div>
    </>
  )
}

export default HomePageContent
