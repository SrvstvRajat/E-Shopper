const app=require('./app');
const { connectDB } = require('./config/db');
const dotenv=require('dotenv');

dotenv.config({path:'backend/config/config.env'});



connectDB();    

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT}/`);
})