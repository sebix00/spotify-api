import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { StyledTrack,TrackImg,ArtistName,TrackButtons,TrackInfo,TrackButton,Title} from "./styles/Track.styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { favouriteAction } from "../store/favourite-slice";
import { userActions } from "../store/userInput";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import ModalInfo from "./ModalInfo";


import Player from "./Audio";
import {
  deleteTrack,
  saveTrack,
} from "../service/trackService";

const Track = (props) => {

  const dispatch = useDispatch();

  const [showModal,setShowModal] = useState(false)

  const handleOpenModal = ()=>{
    setShowModal(true);
  }
  const handleCloseModal = ()=>{
    setShowModal(false);
  }



 
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

// const tracks = useSelector(state=>state.input.tracks);
// const index = tracks.findIndex(track=>track.id===props.id);
// const isFav = useState(false);





  return (
    <StyledTrack>
      <TrackImg src={props.img}/>
      
     {/* <Player url={props.music}/> */}
     <TrackInfo>
     <div>
     <ArtistName>{props.artist}</ArtistName>
     <Title>{props.title}</Title>

     </div>

  
    
      <TrackButtons>
      {/* <TrackButton onClick={handleOpenModal}>More info</TrackButton> */}
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
