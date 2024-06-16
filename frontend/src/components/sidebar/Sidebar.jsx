import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function SideBar() {
  return <div className='flex flex-col border-r-2 border-zinc-500 p-4 h-full'>
        
        <SearchInput/>
        <div className='divider px-auto'></div>
        <Conversations/>
        
        <LogoutButton/>

  </div>
}

export default SideBar
