import { DeleteOutline} from '@mui/icons-material';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { deleteFromTrash } from '../redux/userSlice';

const Trash = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  
  const openFullEmail = (id)=>{
    navigate(`/full-email/${id}`)
  }

  const handleDelete = async (id)=>{
    try {
      const response = await axios.delete(`/delete-from-trash/${user._id}/${id}`)
      dispatch(deleteFromTrash(id))
      toast.success(response.data.msg)
    } catch (error) {
      toast.error(error.response.data)
    }
  }

  return (
    <div className='bg-white'>
      <p className='p-2 text-center'>Deleted mails will be displayed here..</p>
      <ul>
        {user.trash.map(mail=>(
          <li key={mail.id} className='text-sm flex items-center gap-3 p-2 border-b-[1px] border-gray hover:bg-[#f6f8fc] cursor-pointer'>
            <p onClick={()=>openFullEmail(mail.id)} className='grow font-semibold'>{mail.subject}</p>
            <DeleteOutline titleAccess='Delete permanently' onClick={()=>handleDelete(mail.id)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Trash