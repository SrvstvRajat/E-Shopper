const express=require('express');
const app=express();
app.use(express.json());
const product=require('./routers/productRoutes');


app.use("/api/v1",product);



module.exports=app;
