import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import google_icon from '../assets/google-icon.png'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { signInUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [loginView, setLoginView] = useState(true)

    const [loginEmail,setLoginEmail]=useState("")
    const [loginPass,setLoginPass]=useState("")
    const [signUpEmail,setSignUpEmail]=useState("")
    const [signUpPass,setSignUpPass]=useState("")
    const [signUpName,setSignUpName]=useState("")

    const handleSignIn = async (e)=>{
        e.preventDefault()
        if(loginView){
            if(!loginEmail || !loginPass){
                return toast.error("Please fill in all the fields")
            }
            try {
                const response = await axios.post('/signin',{
                    email:loginEmail,
                    password:loginPass
                })
                
                dispatch(signInUser(response.data))
                localStorage.setItem('user', JSON.stringify(response.data))
                toast.success("Successfully signed in...")
                navigate('/')
                
            } catch (error) {
                toast.error(error.response.data)
            }
        }else{
            if(!signUpEmail || !signUpName || !signUpPass){
                return toast.error("Please fill in all the fields")
            }

            try {
                const response = await axios.post('/signup',{
                    name:signUpName,
                    email:signUpEmail,
                    password:signUpPass
                })
                
                dispatch(signInUser(response.data))
                localStorage.setItem('user', JSON.stringify(response.data))
                toast.success("Successfully signed in...")
                navigate('/')
                
            } catch (error) {
                toast.error(error.response.data)
            }
        }
    }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
        <form onSubmit={handleSignIn} className='flex flex-col justify-center items-center gap-5 px-6 py-14 bg-white rounded-md border-2 max-w-sm w-full'>
            <img src={google_icon} alt="Google logo" className='w-[90px]'/>
            <span className='text-center'>
                <Typography variant='h5'>Sign In</Typography>
                <Typography variant='p'>to continue to Gmail clone</Typography>
            </span>
            {loginView ? 
            <>
                <TextField  variant='outlined' label='Email' fullWidth onChange={(e)=>setLoginEmail(e.target.value)}/>
                <FormControl variant="outlined" fullWidth >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        onChange={(e)=>setLoginPass(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </> : 
            <>
                <TextField variant='outlined' label='Name' fullWidth onChange={(e)=>setSignUpName(e.target.value)}/>
                <TextField variant='outlined' label='Email' fullWidth onChange={(e)=>setSignUpEmail(e.target.value)}/>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        onChange={(e)=>setSignUpPass(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>setShowPassword(!showPassword)}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </>
            }
            <div className='flex justify-between w-full'>
                <Button variant='text' onClick={()=>setLoginView(!loginView)} >{loginView ? "Create Account ?" : "Login ?"}</Button>
                <Button variant='contained' type='submit'>{loginView ? "Sign In" : "Sign Up"}</Button>
            </div>
            <div className="flex text-center text-xs flex-col bg-blue-400 p-4 rounded">
                <p className='font-bold '>Use the below mentioned Logins to test the app:</p>
                <p><span className='font-bold'>Email: </span>sample@gmail.com</p>
                <p><span className='font-bold'>Password: </span>Sample@123</p>
            </div>
        </form>
    </div>
  )
}

export default Login