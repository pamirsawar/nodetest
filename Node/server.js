import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(cors);


// mongoose.connect(
//     "mongodb+srv://pamirsawar:Samir123@cluster0.lbtwy1w.mongodb.net/?retryWrites=true&w=majority"
// )
//     .then(() => console.log('MongoDB connected!'))
//     .catch((err) => console.error(err));

await mongoose.connect(
    "mongodb+srv://pamirsawar:Samir123@cluster0.lbtwy1w.mongodb.net/?retryWrites=true&w=majority"
);

console.log('MongoDB connected!');

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log('server is running at http://localhost:4000');
});