const Track = require ("../db/models/track");


class TrackAction{
    
    async saveTrack(req,res){
        const title = req.body.title;
        const body = req.body.body;
        let track;
        try{
            track = new Track({title,body})
            await track.save();
            
        }catch(error){
            return res.status(422).json({message:error.message})
        }

        res.status(2001).json(track);
    }

    //get tracks
    async getAllTrack(req,res){
        let doc;
        try{
            doc = await Track.fin({})
        }catch(error){
            return res.status(500).json({message:error.message})
        }

        console.log(doc);
        res.status(200).json(doc)
    }

    //get a specific track
    async getTrack(req,res){
        const id = req.params.id;
        const track = await Track.find({_id:id});
        
        res.status(200).json(note);
    }

    //delete track
    async deleteTrack(req,res){
        const id = res.params.id;
        await Track.deleteOne({_id:id});

        res.sendStatus(204);
    }
}

module.exports = new TrackAction();