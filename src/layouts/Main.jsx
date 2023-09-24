import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

const StyledBox = styled(Box)({
  background:"white",
  borderRadius:"8px",
  marginTop:"64px",
  marginBottom:"8px",
  marginRight:"8px",
  minHeight:"calc(100vh - 64px - 16px)",
  transition:"all 0.2s",
  overflow:"hidden"
})

const Main = () => {
  
  const [openDrawer,setOpenDrawer] = useState(true)

  const toggleDrawer = ()=>{
    setOpenDrawer(prevState => !prevState)
  }

  return (
    <div>
        <Header toggleDrawer={toggleDrawer}/>
        <Sidebar openDrawer={openDrawer}/>
        <StyledBox sx={{
          marginLeft: openDrawer ? "250px" : "8px"
        }}>
          <Outlet/>
        </StyledBox>
    </div>
  )
}


export default Main