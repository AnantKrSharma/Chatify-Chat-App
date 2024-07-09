import React from 'react'
import useConversation from '../../zustand/useConversation'

function Conversation({conversation, lastIndex, emoji}) {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id
   
   return <>
            <div className={`flex items-center gap-2 hover:bg-slate-700 rounded-lg p-2 cursor-pointer ${isSelected ? "bg-sky-700" : null}`}
                 onClick={() => {setSelectedConversation(conversation)}}>
                    <div className='avatar online'>
                        <div className='ring rounded-full h-10 w-10'>
                            <img src={conversation.profilePic} alt="user avatar"/>
                        </div>
                    </div>
                    
                    <div className='flex flex-col justify-center flex-1'>
                        <div className='flex items-center justify-between gap-3'>
                            <p className='font-semibold text-gray-200'>{conversation.fullName}</p>
                            {/* <span className='text-xl'>{emoji}</span> */}
                        </div>
                    </div>
            </div>

            {lastIndex ? null : <div className='divider my-1 py-0 px-3 h-1'></div>}
    </>
}

export default Conversation
