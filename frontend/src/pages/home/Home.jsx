import React from 'react'
import SideBar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message-container/MessageContainer'

function Home() {
  return <div className='flex flex-col md:flex-row items-stretch md:items-center justify-center bg-gray-600 h-screen md:h-[650px] p-4 md:p-0 rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-40 w-full md:w-auto'>
    <SideBar />
    <MessageContainer />
  </div>
}

export default Home
