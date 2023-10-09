import React from 'react'
import {LabelOutlined,StarBorderTwoTone, DeleteOutline} from '@mui/icons-material';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { addToTrash } from '../redux/userSlice';

//Import Label and Star to use Conditional rendering

const Inbox = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  
  const openFullEmail = (id)=>{
    navigate(`/full-email/${id}`)
  }

  const moveToTrash = async (id)=>{
    try {
      const response = await axios.delete(`/move-to-trash/${user._id}/${id}`)
      dispatch(addToTrash(id))
      toast.success(response.data.msg)
    } catch (error) {
      toast.error(error.response.data)
    }
  }
  const markAsStarred = async (id)=>{
    try {
      
    } catch (error) {
      
    }
  }
  const markAsImportant = async (id)=>{
    try {

    } catch (error) {
      
    }
  }

  return (
    <div className='bg-white'>
      <p className='p-2 text-center'>Your Mails will be displayed here..</p>
      <ul>
        {user.inbox.map(mail=>(
          <li key={mail.id} className='text-sm flex items-center gap-3 p-2 border-b-[1px] border-gray hover:bg-[#f6f8fc] cursor-pointer'>
            <StarBorderTwoTone onClick={()=>markAsStarred(mail.id)}/>
            <LabelOutlined onClick={()=>markAsImportant(mail.id)}/>
            <p onClick={()=>openFullEmail(mail.id)} className='grow font-semibold'>{mail.subject}</p>
            <DeleteOutline titleAccess='Move to Trash' onClick={()=>moveToTrash(mail.id)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Inbox