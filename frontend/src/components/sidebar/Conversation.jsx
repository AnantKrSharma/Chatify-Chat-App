import React from 'react'

function Conversation() {
  return <>
        <div className='flex items-center gap-2 hover:bg-slate-700 rounded-lg p-2 cursor-pointer'>
                <div className='avatar online'>
                    <div className='ring rounded-full h-10 w-10'>
                        <img src="https://avatar.iran.liara.run/public/girl?username=DrishtiSingh" alt="user avatar"/>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center flex-1'>
                    <div className='flex items-center justify-between gap-3'>
                        <p className='font-semibold text-gray-200'>Anant Kr Sharma</p>
                        <span className='text-xl'>🥰</span>
                    </div>
                </div>
        </div>

        <div className='divider my-[1px] py-0 px-3 h-1'></div>
  </>
}

export default Conversation
