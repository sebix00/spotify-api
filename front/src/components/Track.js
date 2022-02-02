import { BsFillHeartFill } from "react-icons/bs";
import { StyledTrack,TrackImg,ArtistName,TrackButtons,TrackInfo,Title} from "./styles/Track.styled";
import { useState} from "react";
import { useDispatch } from "react-redux";
import { favouriteAction } from "../store/favourite-slice";
import { userActions } from "../store/userInput";
import { toast } from 'react-toastify';
import ModalInfo from "./ModalInfo";

import {
  deleteTrack,
  saveTrack,
} from "../service/trackService";

const Track = (props) => {

  const dispatch = useDispatch();



 
  const clickHandler = async () => {
    dispatch(userActions.handleFavourite(props.id));
    if(!props.isFavourite){
      const track = {id:props.id,title:props.title,isFavourite:true,img:props.img,music:props.music,artist:props.artist,duration:props.duration};
      dispatch(favouriteAction.hendleAddFavourite(track));
      toast.success('The song has been added to your favorites');
    
      await saveTrack(track);
    }
    else {
      dispatch(favouriteAction.handleRemoveFavourie(props.id));
      toast.warn("The song has been removed from the favorites")
      await deleteTrack(props.id);
  };
}



  return (
    <StyledTrack>
      <TrackImg src={props.img}/>

     <TrackInfo>
     <div>
     <ArtistName>{props.artist}</ArtistName>
     <Title>{props.title}</Title>

     </div>

  
    
      <TrackButtons>
      <ModalInfo 
        artist={props.artist}
        title={props.title}
        id={props.id}
        duration={props.duration}
        spotify={props.spotify}
        popularity={props.popularity}
        img={props.img}
        isFavourite={props.isFavourite}
        music={props.music}
        />
     
     <div onClick={clickHandler}>
           <BsFillHeartFill className={props.isFavourite ? "active" : "noActive"} />

      </div>
      </TrackButtons>
    

     </TrackInfo>
     
   
    </StyledTrack>
  );
};

export default Track;
