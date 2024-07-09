import mongoose from 'mongoose'

export async function mongoConnect(){
    try{
        const uri = process.env.MONGO_DB_URI;
        
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to MongoDB", error.message);
    }
}
