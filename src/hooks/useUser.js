import { useContext } from 'react'
import UserContext from '../contexts/UserContext/UserContext'

const useUser = () => useContext(UserContext)

export default useUser
