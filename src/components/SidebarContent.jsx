import { Box, Button, List, ListItem } from '@mui/material'
import CreateIcon from '@mui/icons-material/Create';
import React, { useState } from 'react'
import styled from '@emotion/styled';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import ComposeMail from './ComposeMail';
import { NavLink } from 'react-router-dom';


const ComposeButton = styled(Button)({
    background: "#c2e7ff",
    color:"black",
    padding:"15px 5px",
    borderRadius:"16px",
    minWidth:"150px",
    textTransform:"none",
    "&:hover":{
        boxShadow:"0 0 7px rgba(0,0,0,0.3)",
        background: "#c2e7ff",
    },
    "& svg":{
        marginRight:"15px"
    }
})

const Container = styled(Box)({
    padding:"8px",
    "& > ul":{
        cursor:"pointer",
        fontWeight:500,
        fontSize:"14px",
        fontFamily:"sans-serif",
        "& > li":{
            padding:"0",
        },
        "& > li a":{
            textDecoration:"none",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding:"8px 18px",
            color: "gray",
            width: "100%",
            fontWeight:"bold",
            borderRadius:"0 999px 999px 0",
            "&:hover":{
                backgroundColor: "#eaebef",
            },
            "&.active":{
                backgroundColor: "#d3e3fd",
                color: "black",
            }
        }
    }
})

const SidebarContent = () => {

    const [openDialog,setOpenDialog]= useState(false)

    const onComposeBtnClick = ()=>{
        setOpenDialog(true)
    }
    
  return (
    <Container>
        <ComposeButton onClick={onComposeBtnClick}>
            <CreateIcon/>
            Compose
        </ComposeButton>
        <List>
            {SIDEBAR_DATA.map((data,index)=>(
                <ListItem key={index}>
                    <NavLink to={data.route}><data.icon fontSize='small'/> {data.title}</NavLink>
                </ListItem>
            ))}
        </List>
        <ComposeMail openDialog={openDialog} setOpenDialog={setOpenDialog}/>
    </Container>
  )
}

export default SidebarContent