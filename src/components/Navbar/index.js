import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/logo.svg'
import Login from '../../Pages/Login'
import "./navbar.scss"

const Navbar = () => {
   const [openModal, setOpenModal] =useState(false)

  return (
    <div className='block' >
      <Link to='/'>
        <Logo/>
      </Link>
       <div >
            <button 
              className='openModalBtn'
              onClick={() => setOpenModal(true)}>
               Open
            </button>
          {openModal && <Login closeModal={setOpenModal}/>}
       </div>
    </div>
  )
}

export default Navbar