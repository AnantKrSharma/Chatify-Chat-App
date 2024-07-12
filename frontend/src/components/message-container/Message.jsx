import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractDateTime } from '../../utils/extractDateTime'

function Message({message}) {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName =  fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const chatBubbleColor = fromMe ? 'bg-sky-700' : 'bg-stone-700';
  const formattedDate = extractDateTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'shake' : ""

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
              <img src={profilePic} alt="avatar_baby" />
            </div>  
        </div>
          
        <div className={`chat-bubble text-white ${chatBubbleColor} ${shakeClass} pb-2`}> {message.message}</div>

        <div className='chat-footer text-white opacity-70 text-[11px] flex gap-1 items-center'> {formattedDate}</div>

    </div>
  )
}

export default Message
