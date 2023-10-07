import mongoose from "mongoose";

async function connect() {
    await mongoose.connect(
        "mongodb+srv://pamirsawar:Samir123@cluster0.lbtwy1w.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log('MongoDB connected!');
}

export default connect;