import { StyledTrackList } from "./styles/TrackList.styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Track from "./Track";
import { useState,Suspense } from "react";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../service/trackService";

const TrackList = (props) => {

  const fav = useSelector(state=>state.favourite.trackList);
  const tracks = props.tracks



  let element;

  if(tracks.length>0){
    element = tracks.map(track=>{

     const isFav= fav.some(f=>f.id===track.id);
      return( 
              <Track 
                title={track.title}
                artist={track.artist}
                key={track.id}
                id={track.id}
                isFavourite={isFav} 
                img={track.img}
                music={track.music}
                spotify={track.spotify}
                duration={track.duration}
                popularity={track.popularity}
              />)
  })
  }else{
    element="Please type some artis";
  }



  return (
    <>
  <StyledTrackList>
    {element}
    </StyledTrackList>
    </>
    );
};

export default TrackList;
