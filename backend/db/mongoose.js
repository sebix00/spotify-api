const mongoose = require("mongoose");
const { database } = "./config.js";

//db connect
mongoose.connect(database, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const Tra = mongoose.model("Tra",{
    title:String,
    body:String
});
const newTrack = new Tra({
    title:"test",
    body:"test"
})

newTrack.save().then(()=>{
    console.log("nowy trak został zapisany");
})