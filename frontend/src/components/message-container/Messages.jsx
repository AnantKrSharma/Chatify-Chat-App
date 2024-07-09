import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import '../../index.css'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageSkeleton from '../skeletons/MessageSkeleton.jsx'

function Messages() {
  const {loading, messages} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }, [messages])

  return <div className='px-3 flex-1 overflow-auto'>
            {!loading && messages.length !== 0 && (messages.map((message) => (
              <div key={message._id} ref={lastMessageRef}>
                <Message message={message}/>
              </div>
            )))}

            {loading && [...Array(6)].map( (_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length == 0 && (
              <p className='text-center'>Send a message to start the conversation.</p>
            )}
    </div>
}

export default Messages
