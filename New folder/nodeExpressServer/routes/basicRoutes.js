import express from "express";

const router = express.Router();
//get route
router.get("/",(req,res)=>{
    console.log(req.rawHeaders);   
    res.send("Hello!!")
})

router.get("/about",(req,res)=>{
    res.send("<h1>My name is Jude</h1>")
})

router.get("/contact",(req,res)=>{
    const contactInfo ={
        name: "Jude",
        email: "lenuanwa@gmail.com",
        phone: 2364128212
    };
    res.json(contactInfo);
})

//POST
router.post("/register",(req,res)=>{
    res.sendStatus(201);
})

//PUT
router.put("/login",(req,res)=>{
    res.sendStatus(200);
})

//PATCH
router.patch("/login",(req,res)=>{
    res.sendStatus(200);
})

//DELETE
router.delete("/login",(req,res)=>{
    res.sendStatus(200);
})

export default router