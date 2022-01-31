const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    artist:{
        type:String
    },
    isFavourite:{
        type:Boolean,
        // required:true,
    },
    id:{
        type:String,
    },
    img:{
        type:String,
    },
    music:{
        type:String
    },
    duration:{
        type:Number,
    },
    spotify:{
        type:String
    },
    popularity:{
        type:Number
    }

})


const Track = mongoose.model("Track",TrackSchema);



module.exports = Track;