require('dotenv').config();
const connectDB = require('./config/db')
const express = require('express');
const productRoute = require('./route/productRoute')
const app = express();
app.use(express.json())

connectDB()
const PORT = process.env.PORT||9000;

app.use('/products',productRoute)
app.listen(PORT, () => {
    console.log(`Server is running on 127.0.0.1:${PORT}`);
})