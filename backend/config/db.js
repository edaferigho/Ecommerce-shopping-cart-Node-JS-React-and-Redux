// require('dotenv').config()
mongoose = require('mongoose')

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Ecommerce", { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected Successfully')
    } catch (error) {
        // console.log('Mongodb connection failed!');
        console.log(error)
        process.exit(1)
    }
}
module.exports=connectDB