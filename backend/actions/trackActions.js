const Track = require ("../db/models/track");


class TrackAction{
    
    async saveTrack(req,res){
        const title = req.body.title;
        const isFavourite = req.body.isFavourite;
        const id = req.body.id;
        const img= req.body.img;
        const music = req.body.music;
        const artist = req.body.artist;
        const popularity = req.body.popularity;
        const spotify = req.body.spotify;
        const duration = req.body.duration;
   
        let track;
        try{
            track = new Track({title,isFavourite,id,img,music,artist,popularity,duration,spotify})
            await track.save();
            
        }catch(error){
            return res.status(422).json({message:error.message})
        }

        res.status(201).json(track);
    }

    //get tracks
    async getAllTrack(req,res){
        let doc;
        try{
            doc = await Track.find({})
        }catch(error){
            return res.status(500).json({message:error.message})
        }

        console.log(doc);
        res.status(200).json(doc)
    }

    //get a specific track
    async getTrack(req,res){
        const id = req.params.id;
        const track = await Track.find({id});
        
        res.status(200).json(note);
    }

    //delete track
    async deleteTrack(req,res){
        const id = req.params.id;
        await Track.deleteOne({id});

        res.sendStatus(204);
    }
}

module.exports = new TrackAction();