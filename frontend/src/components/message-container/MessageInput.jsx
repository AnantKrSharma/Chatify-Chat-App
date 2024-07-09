import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

function MessageInput() {
  const [message, setMessage] = useState('')
  const {loading, sendMessage} = useSendMessage();

  async function handleSubmit(e){
    e.preventDefault();
    if(!message) return

    await sendMessage(message)
    setMessage('')
  }

  return (
    <form className='px-4 my-2' onSubmit={handleSubmit}>
        
        <div className='w-full relative'>
              <input type="text" 
                  className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-100 text-white'
                  placeholder='Send message ..'
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
              />

              <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                { 
                  loading ? <span className='loading loading-spinner loading-md'></span> : <BsSend className='hover:text-cyan-400 transition-colors duration-120'/>
                }
              </button>

            </div>
    
    </form>
  )
}

export default MessageInput
