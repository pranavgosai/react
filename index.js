const  express = require ("express");

const cors =require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRoutes");
const app = express();
const cookieParser = require("cookie-parser")

app.listen(4000,()=>{
    console.log("server started on PORT 4000");
});
mongoose.set(`strictQuery`,true);
mongoose.connect("mongodb://0.0.0.0:27017/user",{
    useNewUrlparser:true, 
    useUnifiedTopology:true,
}).then(()=>{
    console.log("DB connection succsessfull");
}).catch(err=>{
    console.log(err.message);
})

app.use(cors({
    origin:["http://localhost:3000"],
    method:["GET" , "POST"],
    credentials:true,
}))

app.use(cookieParser());
app.use(express.json());
app.use("/",authRoutes);