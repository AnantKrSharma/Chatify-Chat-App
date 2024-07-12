import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext();

export function SocketContextProvider({children}){
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const socket = io('https://chatify-agoz.onrender.com', {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            // socket.on() is used to listen to the events, and it can be used both on client and server side.
            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            })

            return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser])

    return <SocketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </SocketContext.Provider>
}


export function useSocketContext(){
  return useContext(SocketContext);  
} 
