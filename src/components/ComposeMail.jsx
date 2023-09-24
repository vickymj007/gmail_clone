import styled from '@emotion/styled'
import { Close, Delete } from '@mui/icons-material'
import { Box, Button, Dialog, InputBase, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const dialogStyle = {
    height:"90%",
    width:"80%",
    maxHeight:"100%",
    maxWidth:"100%",
    boxShadow:"none"
}

const Header = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    padding:"10px 15px",
    background:"#f2f6fc",
    "& > p":{
        fontSize:"14px",
        fontWeight:600
    }
})

const RecipientWrapper = styled(Box)({
    display:"flex",
    flexDirection:"column",
    padding:"0 15px",
    "& > div":{
        fontSize:14,
        borderBottom:"2px solid #F5F5F5",
        marginTop:10
    }
}) 

const Footer = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px 15px"
})

const SendButton = styled(Button)({
    background:"#0B57D0",
    color:"#fff",
    fontWeight:500,
    textTransform:"none",
    borderRadius:"15px",
    width:"100px"
})

const ComposeMail = ({openDialog, setOpenDialog}) => {

    const [data,setData]= useState({to:"",subject:"",body:""})
    
    const closeComposeMail = (e)=>{
        e.preventDefault()
        setOpenDialog(false)
    }
    
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const sendMail = (e)=>{
        e.preventDefault()
        console.log(data.to,data.subject,data.body)
        setOpenDialog(false)
    }

  return (
    <Dialog
        open={openDialog}
        PaperProps={{sx:dialogStyle}}
    >
        <Header>
            <Typography>New Message</Typography>
            <Close fontSize='small' onClick={closeComposeMail}/>
        </Header>
        <RecipientWrapper>
            <InputBase placeholder='To:' name="to" onChange={handleChange}/>
            <InputBase placeholder='Subject:'name="subject" onChange={handleChange}/>
        </RecipientWrapper>
        <TextField 
            multiline
            rows={20}
            name="body"
            sx={{"& .MuiOutlinedInput-notchedOutline":{border:"none"}}}
            onChange={handleChange}
        />
        <Footer>
            <SendButton onClick={sendMail}>Send</SendButton>
            <Delete onClick={()=>setOpenDialog(false)}/>
        </Footer>
    </Dialog>
  )
}

export default ComposeMail