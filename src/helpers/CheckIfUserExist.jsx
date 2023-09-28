import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const CheckIfUserExist = () => {
  const {isLoggedIn} = useSelector(state => state.user)

  return isLoggedIn ? <Navigate to='/'/> : <Outlet/>
}

export default CheckIfUserExist