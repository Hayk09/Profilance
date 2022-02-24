import React from 'react'
import Navbar from '../components/Navbar'

const AuthLayout = ({children}) => {
  return (
    <div>
      <Navbar/>
          <div>{children}</div>
    </div>
 
  )
}

export default AuthLayout

