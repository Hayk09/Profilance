import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/logo.svg'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='block' >
      <Link to='/'>
        <Logo/>
      </Link>
       <div className='link'>
          <Link to='/login'>
            <button>
               Вход
            </button>
          </Link>
         <Link to='/register'>
           <button>
              регистрация
           </button>
         </Link>
       </div>
    </div>
  )
}

export default Navbar