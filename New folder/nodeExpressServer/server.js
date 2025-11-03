import express from "express";

//creates an application
const app = express();

const PORT = 3000;
app.listen(PORT,()=>{
    console.log("The server is up and running on PORT "+PORT);
    
});