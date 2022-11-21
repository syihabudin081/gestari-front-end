import React from 'react'
import Footer from './footer'
import Navbarcomponent from './navbar'


const LayoutLanding = (props) => {
  return (
    <>
    <Navbarcomponent/>
    {props.children}
    <Footer/>
    </>
  )
}

export default LayoutLanding