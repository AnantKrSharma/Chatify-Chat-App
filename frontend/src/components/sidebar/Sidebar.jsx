import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function SideBar() {
  return <div className='flex flex-col border-r-2 border-zinc-700 p-[8px] h-full'>
        
        <SearchInput/>
        <div className='divider m-2 px-auto'></div>
        <Conversations/>
        
        <LogoutButton/>

  </div>
}

export default SideBar
