import mongoose from "mongoose";


const connectDb = async(DB_URL ) => {
    const DB_OPTIONS = {
        dbName : "resumeUploader"
    }
    try {
        await mongoose.connect(DB_URL,DB_OPTIONS);
        console.log("Mongoose connected successfully");
        
    } catch (error) {
        
    }
}

export default connectDb