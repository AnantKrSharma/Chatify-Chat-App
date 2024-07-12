import React, { useState } from 'react'
import Gender from './GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

function SignUp() {

    const [input, setInput] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signup } = useSignup();

    function handleCheckboxChange(gender){
        // setInput({...input, gender: gender})
        setInput({...input, gender})
    }

    async function handleSubmit(e){
        e.preventDefault();
        console.log(input);

        await signup(input);
    }

  return (
    
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30'>
        
            <h1 className='text-3xl font-semibold text-center text-white mb-5'>
               SignUp -
                <span className='text-sky-400'> Chatify
                </span>
            </h1>

            <form onSubmit={handleSubmit}>
                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type="text" placeholder='John Doe' className='input input-bordered h-10 w-full'
                                    value={input.fullName} 
                                    onChange={(e)=>{
                                        setInput({...input, fullName:e.target.value})
                                    }}
                            />
                    </div>

                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type="text" placeholder='Johndoe' className='input input-bordered h-10 w-full'
                                    value={input.username}
                                    onChange={(e)=>{
                                        setInput({...input, username: e.target.value})
                                    }}
                            />
                    </div>

                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input type="password" placeholder='Enter a strong password' className='input input-bordered h-10 w-full'
                                    value={input.password}
                                    onChange={(e)=>{
                                        setInput({...input, password: e.target.value})
                                    }}
                            />
                    </div>
                    
                    <div>
                            <label className="label p-2">
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input type="password" placeholder='Confirm Password' className='input input-bordered h-10 w-full'
                                    value={input.confirmPassword}
                                    onChange={(e)=>{
                                        setInput({...input, confirmPassword: e.target.value})
                                    }}
                            />
                    </div>

                    <Gender onCheckboxChange={handleCheckboxChange}  selectedGender={input.gender}/>

                    <Link to='/login' className='text-center text-sm hover:underline hover:text-blue-600 mt-2 block'>
                        Already have an account?
                    </Link>
                    
                    <div className='flex justify-center items-center'>
                        <button className="btn btn-wide glass btn-xs sm:btn-sm md:btn-md mt-4" disabled={loading}>
                            {loading ? <span className='loading loading-spinner loading-md'></span> : "Sign Up"}
                        </button>
                    </div>
            </form>

        </div>
    
    </div>
  )
}

export default SignUp
