const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");



// create a databse connection
//this is address of our db
mongoose.connect("mongodb+srv://swagblower:qwerty123@clusterethinic.h4hfi2y.mongodb.net/").then(()=> console.log('MongoDB Connected')).catch(()=> console.log('error'));
  


//make an app 
const app = express();
console.log("Started teji")

// make a port to run server 
const PORT = process.env.PORT || 5000;


app.use(
    cors({
       origin : 'http://localhost:5173' ,
       methods :['GET' , 'POST' , 'DELETE' , 'PUT'],
       allowedHeaders : [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
       ],
       credentials : true
    })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth' , authRouter);
app.use("/api/admin/products", adminProductsRouter);

app.listen(PORT, () => console.log(`Server is now running on ${PORT}`));



