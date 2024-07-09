import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()

    async function signup({fullName, username, password, confirmPassword, gender}){
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender})
        if(!success) return;

        setLoading(true);
        
        try{
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }
            
            // local-storage
            localStorage.setItem('chat-user', JSON.stringify(data))   
            //context 
            setAuthUser(data)
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }

    return {loading, signup};
}


function handleInputErrors({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the input fields.")
        return false;
    }
    
    if(password.length < 6){
        toast.error("Password length must be greater than 6 characters.")
        return false;
    }
    
    if(password !== confirmPassword){
        toast.error("Passwords do not match.")
        return false;
    }
    
    
    return true;
}


export default useSignup
