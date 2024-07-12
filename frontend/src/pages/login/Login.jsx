import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {loading, login} = useLogin();

    async function handleSubmit(e){
        e.preventDefault();
        await login(username, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30'>
            
                <h1 className='text-3xl font-semibold text-center text-white mb-5'>
                Login -
                    <span className='text-sky-400'> Chatify
                    </span>
                </h1>

                <form onSubmit={handleSubmit}>
                        <div>
                                <label className="label p-2">
                                    <span className='text-base label-text'>Username</span>
                                </label>
                                <input type="text" placeholder='Enter Username' className='input input-bordered h-10 w-full'
                                value={username} onChange={ (e) => {setUsername(e.target.value)} }/>
                        </div>

                        <div>
                                <label className="label p-2">
                                    <span className='text-base label-text'>Password</span>
                                </label>
                                <input type="Password" placeholder='Enter Password' className='input input-bordered h-10 w-full'
                                value={password} onChange={ (e)=>{setPassword(e.target.value)} }/>
                        </div>

                        <Link to='/signup' className='text-center text-sm hover:underline hover:text-blue-600 mt-2 block'>
                            Don't have an account?
                        </Link>
                        
                        <div className='flex justify-center items-center'>
                            <button className="btn glass w-1/2 btn-md mt-4 text-base" disabled={loading}>
                                {loading ? <span className='loading loading-spinner loading-md'></span> : "Login"}
                            </button>
                        </div>
                </form>

            </div>
        
        </div>
    )
}

export default Login
