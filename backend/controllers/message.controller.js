import { query } from "express";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketID, io } from "../socket/socket.js";

export async function sendMessage(req, res){
    try{
        const { message } = req.body;
        const receiverId = req.params.id;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [ receiverId, senderId ]
            }
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [receiverId, senderId]
            }) 
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        })
        
        if(newMessage){
            await Conversation.updateOne({_id: conversation._id}, {
                    $push:{
                        messages: newMessage._id
                    }
                })
        }
            
        // SOCKET.IO
        const receiverSocketID = getReceiverSocketID(receiverId);
        if(receiverSocketID){
            // io.to(<socket_id>).emit() is used to send events to specific client.
            io.to(receiverSocketID).emit('newMessage', newMessage)
        }

        res.status(201).json(newMessage);
    }
    catch(error){
        console.log("Error in the sendMessage controller - ", error.message);

        res.status(500).json({
            error: "Error while sending message."
        })
    }
}


export async function getMessages(req, res){
    try{
        const userToChatId = req.params.id;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{
                $all: [ senderId, userToChatId ]
            }
        }).populate('messages')

        if(!conversation){
            return res.status(200).json([])
        }

        const messages = conversation.messages;

        res.status(200).json(messages)
    }
    catch(error){
        console.log("Error in sendMessages controller - ", error.message);

        res.status(500).json({
            error: "Error while getting message."
        })
    }
}
