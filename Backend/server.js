const express = require("express");
const mongoose=require("mongoose")
const cors=require("cors");
const app = express();
let routes=require("./routes.js");
let AsapModal=require("./modeles/ThingsToDo.js")
async function Connection() {
       await mongoose.connect("mongodb+srv://yashasnaidu3:yashas3@cluster0.gll0see.mongodb.net/Cites?retryWrites=true&w=majority&appName=Cluster0")
       console.log("connected to the DB")
      }

app.use(cors())
app.use(express.json());
app.use("/main",routes)
app.get("/", async (req, res) => {
    let x=await AsapModal.find();
    console.log(x);
  res.json(x);
});

// app.get("/getlocal", (req, res) => {
//   localModal.find()
//   .then(vehicle => res.json(vehicle))
//   .catch(err => res.json(err)) 
// });

Connection().then(()=>{
    app.listen(3000,()=>{
        console.log("connected to localhost")
    })
})

module.exports = app;