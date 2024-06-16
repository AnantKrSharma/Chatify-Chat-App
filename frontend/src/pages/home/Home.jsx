import React from 'react'
import SideBar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message-container/MessageContainer'

function Home() {
  return <div className='border border-zinc-400 flex items-center justify-center bg-gray-400 sm:h-[500px] md:h-[650px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 w-auto'>
    <SideBar />
    <MessageContainer />
  </div>
}

export default Home
