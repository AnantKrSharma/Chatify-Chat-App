import mongoose from 'mongoose'

export async function mongoConnect(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to MongoDB", error);
    }
}
