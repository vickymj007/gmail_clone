import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom"

const AuthRequired = () => { 
    const {isLoggedIn} = useSelector(state => state.user)

  return isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
}

export default AuthRequired