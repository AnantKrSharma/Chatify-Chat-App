import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useLogout() {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext();
    
    async function logout(){
        setLoading(true);
        
        try{
            const res = await fetch('/api/auth/logout',{
                method: "POST",
                headers: { 'Content-Type': "application/json" },
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            // local-storage
            localStorage.removeItem('chat-user')
            // context
            setAuthUser(null)
        }
        catch(error){
            toast.error(error.message)
        }
        finally{
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogout
