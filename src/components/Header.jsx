import React, { useState } from 'react'
import {AppBar, Avatar, Box, InputBase, Toolbar, styled} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TuneIcon from '@mui/icons-material/Tune';
import { gmail_logo } from '../constants/constant';
import { signOutUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deepPurple } from '@mui/material/colors';

const StyledAppBar = styled(AppBar)({
    background:"#f6f8fc",
    boxShadow:"none",
    position:'fixed',
    top:0,
    left:0,
    right:0
})

const SearchWrapper = styled(Box)({
  background:"#EAF1FB",
  marginLeft:80,
  borderRadius:9999,
  minWidth:690,
  maxWidth:720,
  height:48,
  padding:"0 20px",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-between",
  "& > div":{
    width:'100%',
    padding:"0 10px",
  }
}) 

const OptionsWrapper = styled(Box)({
  width:'100%',
  display:"flex",
  justifyContent:"flex-end",
  gap:20,  
  position:"relative"
})

const Header = ({toggleDrawer}) => {

  const {user} = useSelector(state => state.user)

  const dispatch = useDispatch()
  const [showSignOutBtn, setShowSignOutBtn] = useState(false)

  const handleSignOut = ()=>{
    localStorage.removeItem('user')
    dispatch(signOutUser())
  }

  return (
    <StyledAppBar position='static'>
        <Toolbar>
            <MenuIcon color='action' onClick={toggleDrawer}/>
            <img src={gmail_logo} alt="logo" style={{width:110,marginLeft:15}}/>
            <SearchWrapper>
              <SearchIcon color='action'/>
              <InputBase placeholder='Search mail'/>
              <TuneIcon color='action'/>
            </SearchWrapper>
            <OptionsWrapper>
              <HelpOutlineOutlinedIcon color='action'/>
              <SettingsOutlinedIcon color='action'/>
              <AppsIcon color='action'/>
              <Avatar 
                sx={{width:26,height:26, fontSize:16, bgcolor:deepPurple[500], cursor:"pointer"}}
                onClick={()=>setShowSignOutBtn(!showSignOutBtn)}
              >{user.name.slice(0,1)}</Avatar>
              <div className={`bg-slate-300 absolute p-5 top-7 rounded ${showSignOutBtn ? "block" : "hidden"}`}>
                <button onClick={handleSignOut} className='bg-black py-1 px-3 rounded-full'>Signout</button>
              </div>
            </OptionsWrapper>
        </Toolbar>
    </StyledAppBar>
  )
}

export default Header