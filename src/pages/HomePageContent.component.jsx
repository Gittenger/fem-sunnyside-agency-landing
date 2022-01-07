import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const { HamburgerMenu } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center px-5">
        <HamburgerMenu />
      </div>
    </>
  )
}

export default HomePageContent
