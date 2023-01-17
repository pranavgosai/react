const express = require("express");
const path =require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");
const User = require("./models/Login");


const port = process.env.PORT || 30000;

const static_path = path.join(path.join(__dirname),"../public");
const template_path = path.join(path.join(__dirname),"../templates/views");
const partials_path = path.join(path.join(__dirname),"../templates/partials");


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine" , "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path );





app.get("/", (req,res) =>{
 res.render("index")
});

app.get("/login", (req,res)=>{
    res.render("login");
});

app.post("/login", async(req,res)=>{

    try{
        const artist = new User({
            Email:req.body.Email,
            Password:req.body.Password,
        })

       await artist.save();
       res.status(201).render("index");


    }catch(error){
        res.status(400).json(error);
        console.log(error);
    }
    
});

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})