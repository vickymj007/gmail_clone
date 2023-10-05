import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {West, Reply} from '@mui/icons-material';

const FullEmail = () => {
  const navigate = useNavigate()
    const {id} = useParams()
    const {user} = useSelector(state => state.user)

    const emailInfo = user.inbox.find(mail => mail.id === id) || user.trash.find(mail => mail.id === id)

  return (
    <div className=''>
          <nav className='p-2 fixed flex gap-5 shadow-sm w-full bg-white'>
            <West onClick={()=>navigate(-1)} className=' cursor-pointer rounded-full hover:bg-slate-100'/>
          </nav>
          <main className='py-[40px] px-[24px] '>
            <h4 className='text-[28px]'>{emailInfo.subject}</h4>
            <p className='text-xs'>{`<${emailInfo.from}>`}</p>
            <p className='text-xs'>to me</p>
            <div className='bg-slate-50 rounded min-h-[400px] p-4'>
              <p className='text-sm'>{emailInfo.body}</p>
            </div>
            <button className='text-sm rounded-full bg-slate-200 hover:bg-slate-300 py-1 px-3 my-4'><Reply/> Reply</button>
          </main>
    </div>
  )
}

export default FullEmail