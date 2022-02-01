import { StyledTrackList } from "./styles/TrackList.styled";
import { useSelector } from "react-redux";
import Track from "./Track";
import { useState,useEffect } from "react";
import spiner from "./assets/loading.gif"
import { StyledLoad,StyledInfo } from "./styles/Common.styled";


const TrackList = (props) => {

  const fav = useSelector(state=>state.favourite.trackList);
  const isLoading = useSelector(state=>state.input.isLoading);
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
    element=<StyledInfo>Please enter some artist</StyledInfo>;
  }

  const loadingGif=  <StyledLoad src={spiner} alt= "data is loading" />



  return (
    <>
  <StyledTrackList>
    {isLoading? loadingGif : element }
    </StyledTrackList>
    </>
    );
};

export default TrackList;
