import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import { useSelector } from 'react-redux'

const Sent = () => {

  const {user} = useSelector(state => state.user)
  

  return (
    <div className='bg-white'>
      <ul>
        {user.sent.map(mail=>(
          <li key={mail.id} className='text-sm flex items-center gap-3 p-2 border-b-[1px] border-gray hover:bg-[#f6f8fc] cursor-pointer'>
            <p className='grow font-semibold'>{mail.subject}</p>
            <DeleteOutline titleAccess='Delete permanently'/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sent