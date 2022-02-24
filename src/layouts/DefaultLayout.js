import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const DefaultLayout = ({children}) => {
  return (

    <div>
       <Navbar/>
       <div>
       {children}
       </div>
       <Footer/>
    </div>
  )
}

export default DefaultLayout