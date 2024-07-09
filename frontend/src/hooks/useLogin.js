import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext();

    async function login(username, password){
        const success = handleInputErrors(username, password)
        if(!success) return

        setLoading(true)
        
        try{
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ username, password })
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error)
            }

            //local-storage
            localStorage.setItem('chat-user', JSON.stringify(data))
            //context
            setAuthUser(data);
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }

    return {loading, login}
}

export default useLogin


function handleInputErrors(username, password){
    if(!username || !password){
        toast.error("Please fill all the input fields.")
        return false;
    }

    return true;
}
