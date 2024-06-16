import React from 'react'
import { TbLogout2 } from "react-icons/tb";

function LogoutButton() {
  return (
    <button className='flex items-center gap-1 mt-2 w-min p-[6px] rounded-lg bg-red-600 text-white font-normal hover:bg-red-900 duration-[113ms]'>
        <TbLogout2 className='w-6 h-6 text-white cursor-pointer'/> LogOut 
    </button>
  )
}

export default LogoutButton
