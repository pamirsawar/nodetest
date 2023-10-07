import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import TransactionRouters from "./routes/TransactionsApi.js";
import connect from "./Database/mongodb.js";

const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.json());


// mongoose.connect(
//     "mongodb+srv://pamirsawar:Samir123@cluster0.lbtwy1w.mongodb.net/?retryWrites=true&w=majority"
// )
//     .then(() => console.log('MongoDB connected!'))
//     .catch((err) => console.error(err));


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.use('/transaction', TransactionRouters);

await connect();

app.listen(PORT, () => {
    console.log('server is running at http://localhost:4000');
});