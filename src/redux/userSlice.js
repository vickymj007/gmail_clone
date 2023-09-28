import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        isLoggedIn:false
    },
    reducers:{
        signInUser : (state,action)=>{
            state.user = action.payload
            state.isLoggedIn = true
        }
    }
})

export const {signInUser} = userSlice.actions

export default userSlice.reducer