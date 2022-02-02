import { useSelector } from "react-redux";
import { useEffect} from "react";

import { useDispatch } from "react-redux";
import Track from "./Track";
import { fetchingFavourite } from "../store/track-actions";
import { StyledTrackList } from "./styles/TrackList.styled";
import { Title } from "./styles/Search.styled";
import { StyledSpan } from "./styles/Common.styled";
import { StyledInfo } from "./styles/Common.styled";
const Favourite = () => {

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
     {favourite.length>0 ? tracks : <StyledInfo>You dont have favourite music</StyledInfo>}
    </StyledTrackList>
    </>
    
  );
};

export default Favourite;
