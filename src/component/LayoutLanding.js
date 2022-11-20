import React from 'react'
import Footer from './footer'
import Navbar from './navbar'

const LayoutLanding = (props) => {
  return (
    <>
    <Navbar/>
    {props.children}
    <Footer/>
    </>
  )
}

export default LayoutLanding