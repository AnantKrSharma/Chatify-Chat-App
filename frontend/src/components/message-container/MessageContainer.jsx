import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'

function MessageContainer() {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
     return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return <div className='md:min-w-[450px] flex flex-col h-full'>

      {!selectedConversation ? <NoChatSelected/> :
      <>
          <div className='bg-zinc-800 px-4 py-2 mb-1 text-white'>
              <span className='label-text'>To:</span> <span className='font-semibold'>{selectedConversation.fullName}</span>
          </div>

          <Messages/>

          <MessageInput/>
      </>}

  </div>
}

export default MessageContainer


function NoChatSelected(){
  const {authUser} = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
              <p>Welcome {authUser.fullName.split(' ')[0]}👋</p>
              <p>Select a chat to start messaging..</p>
              <TiMessages className='text-3xl md:text-6xl text-center'></TiMessages>
          </div>
    </div>
  )
}
