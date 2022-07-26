const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const router = require('./router/index')
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = 8000;
const DB_URI = "mongodb+srv://IFudor1a:IFudor1a@cluster0.71gev.mongodb.net/?retryWrites=true&w=majority"
const start = async () => {
    try {
        await mongoose.connect(DB_URI);
        app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT: ${PORT}`));
    } catch (error) {
        console.error(error)
    }
}
start();