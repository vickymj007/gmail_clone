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
        },
        signOutUser: (state)=>{
            state.user = null
            state.isLoggedIn = false
        },
        addToTrash : (state,action)=>{
            state.user.trash = [...state.user.trash, state.user.inbox.find(mail => mail.id === action.payload)]
            state.user.inbox = state.user.inbox.filter(mail => mail.id !== action.payload)
        },
        deleteFromTrash : (state,action)=>{
            state.user.trash = state.user.trash.filter(mail => mail.id !== action.payload)
        },
        deleteFromInbox : (state,action)=>{
            state.user.inbox = state.user.inbox.filter(mail => mail.id !== action.payload)
        },
        updateSentMail : (state,action) =>{
            state.user.sent = [...state.user.sent, action.payload]
        }
    }
})

export const {
    signInUser, 
    signOutUser,
    addToTrash,
    deleteFromTrash,
    deleteFromInbox,
    updateSentMail
} = userSlice.actions

export default userSlice.reducer