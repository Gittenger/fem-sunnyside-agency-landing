import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const arbStyles = {
  logo: {
    top: '3.3rem',
  },
  headerText: {
    color: '#fffff3',
    fontSize: '2.6rem',
  },
}

const HomePageContent = () => {
  const { Header, Transform, Stand } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center">
        <Header />

        <Transform />
        <Stand />
      </div>
    </>
  )
}

export default HomePageContent
