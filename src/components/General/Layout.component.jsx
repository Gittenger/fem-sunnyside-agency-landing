import React from 'react'
import CIndex from '../components.index'

const LayoutStyles = 'layout'

const ContentStyles = 'content'

const Layout = ({ children }) => {
  const {} = CIndex
  return (
    <div className={LayoutStyles}>
      <div className={ContentStyles}>{children}</div>
    </div>
  )
}

export default Layout
