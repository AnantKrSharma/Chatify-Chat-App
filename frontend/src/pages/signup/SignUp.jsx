import React from 'react'
import Gender from './GenderCheckbox.jsx'

function SignUp() {
  return (
    
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

        <div className='border border-zinc-400 w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10'>
        
            <h1 className='text-3xl font-semibold text-center text-white mb-5'>
               SignUp -
                <span className='text-sky-400'> Chatify
                </span>
            </h1>

            <form>
                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type="text" placeholder='John Doe' className='input input-bordered h-10 w-full'/>
                    </div>

                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type="text" placeholder='JohnDoe' className='input input-bordered h-10 w-full'/>
                    </div>

                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type="password" placeholder='Enter a strong password' className='input input-bordered h-10 w-full'/>
                    </div>
                    
                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input type="password" placeholder='Confirm Password' className='input input-bordered h-10 w-full'/>
                    </div>

                    <Gender/>

                    <a href="#" className='text-center text-sm hover:underline hover:text-blue-600 mt-2 block'>
                        Already have an account?
                    </a>
                    
                    <div className='flex justify-center items-center'>
                        <button className="btn glass w-1/2 btn-md mt-4">
                          Sign Up
                        </button>
                    </div>
            </form>

        </div>
    
    </div>
  )
}

export default SignUp
