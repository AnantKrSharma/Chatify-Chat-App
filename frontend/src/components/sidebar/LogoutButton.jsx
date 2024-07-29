import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
  const {loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      {loading ? (
        <span className='loading loading-spinner loading-md'></span>
      ) : (
        <button className='flex items-center gap-1 mt-2 w-min p-[6px] rounded-lg bg-red-700 text-white font-normal hover:bg-red-900 duration-[118ms]'
              onClick={logout}>
        <TbLogout2 className='w-6 h-6 text-white cursor-pointer'/> LogOut
      </button>
      )}
    </div>
  )
}

export default LogoutButton
