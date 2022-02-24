import { useContext } from 'react'
import AdminContext from '../contexts/AdminContext/AdminContext'

const useAdmin = () => useContext(AdminContext)

export default useAdmin
