import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import Track from "./Track";
import { fetchingFavourite } from "../store/track-actions";
import { StyledTrackList } from "./styles/TrackList.styled";
import { Title } from "./styles/Search.styled";
import { StyledSpan } from "./styles/Search.styled";
const Favourite = () => {
  // const [favourite,setFavourite] = useState([]);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchingFavourite());
  },[])

  const favourite = useSelector(state=>state.favourite.trackList);

  

  let tracks;

  if(favourite.length>0){
   
     tracks = favourite.map((track) => (
      <Track 
          title={track.title}
          artist={track.artist}
          id={track.id}
          isFavourite={track.isFavourite}
          img={track.img}
          music={track.music}
          spotify={track.spotify}
          duration={track.duration}
          popularity={track.popularity}

           />
    ));
  

  }
  
  return (
    <>
    <Title>Your <StyledSpan>favorite's</StyledSpan>  music</Title>
    <StyledTrackList>
     {favourite.length>0 ? tracks : "you dont hace favourite music"}
    </StyledTrackList>
    </>
    
  );
};

export default Favourite;
