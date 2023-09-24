import React from 'react'
import {Drawer} from '@mui/material'
import SidebarContent from './SidebarContent'


const Sidebar = ({openDrawer}) => {

  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      variant='persistent'
      ModalProps={{
        keepMounted:true
      }}
      sx={{
        "& .MuiDrawer-paper":{
          marginTop:"64px",
          boxShadow:'none',
          width:"250px",
          background:"#f6f8fc",
          height:"calc(100vh - 64px)",
          borderRight:"none"
        }
      }}
    >
      <SidebarContent/>
    </Drawer>
  )
}

export default Sidebar