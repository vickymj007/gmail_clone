import React, { useState } from 'react'
import {Label,LabelOutlined,StarBorderTwoTone,Star, DeleteOutline} from '@mui/icons-material';
import {data} from '../constants/dummydata.js'

const Inbox = () => {
  
  
  return (
    <div className='bg-white'>
      <ul>
        {data.map(mail=>(
          <li key={mail.id} className='text-sm flex items-center gap-3 p-2 border-b-[1px] border-gray hover:bg-[#f6f8fc] cursor-pointer'>
            <StarBorderTwoTone/>
            <LabelOutlined/>
            <p className='grow font-semibold'>{mail.subject}</p>
            <DeleteOutline/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Inbox