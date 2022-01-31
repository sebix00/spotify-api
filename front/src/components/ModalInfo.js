import { StyledModal,TrackModal,DataContainer,DataTitle,DataContent,TrackImg,TrackInfo,StyledLink,Back,Front} from "./styles/StyledModal";
import {IoArrowBackCircleOutline } from "react-icons/io5";
import { BsFillHeartFill,BsStar } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { favouriteAction } from "../store/favourite-slice";
import { toast } from 'react-toastify';
import { userActions } from "../store/userInput";
import {TrackButton} from "./styles/Track.styled";
import { StyledHeart } from "./styles/StyledModal";
import { RiExternalLinkLine } from "react-icons/ri";
import stars from "./assets/star.svg";

import {
  deleteTrack,
  saveTrack,
} from "../service/trackService";

const  ModalInfo=(props)=> {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const dispatch = useDispatch();

    const clickHandler = async () => {
      dispatch(userActions.handleFavourite(props.id));
      if(!props.isFavourite){
        const track = {id:props.id,title:props.title,isFavourite:true,img:props.img,music:props.music,artist:props.artist};
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
  
    function toggleModal(e) {
      setOpacity(0);
      setIsOpen(!isOpen);
      console.log("modal")
    }
  
    function afterOpen() {
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }
  
    function beforeClose() {
      return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
      });
    }

    const msToMin = value =>{
      var minutes = Math.floor(value / 60000);
      var seconds = ((value % 60000) / 1000).toFixed(0);
      return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    
  
    return (
      <div>
        <TrackButton onClick={toggleModal}>More info</TrackButton>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
        >
          <TrackModal>
          <TrackImg src={props.img}/>
          <TrackInfo>

          <DataContainer>
          <DataTitle>
            artist
          </DataTitle>
          <DataContent>
            {props.artist}
          </DataContent>
          </DataContainer>
      
        

          <DataContainer>
          <DataTitle>
           duration
          </DataTitle>
          <DataContent>
            {msToMin(props.duration)}
          </DataContent>
            </DataContainer>

            <DataContainer>
          <DataTitle>
          popularity
          </DataTitle>
          <DataContent>
          <Back>
          <Front per={props.popularity}></Front>
          </Back>
          
          
          </DataContent>
          </DataContainer>
         
          <DataContainer>
          <DataTitle>
          spotify page
          </DataTitle>
          <DataContent>
            <RiExternalLinkLine style={{ fontSize: "2rem",color:"rgb(206, 72, 72)" }} />
            <StyledLink href={props.spotify} target="_blank">Link</StyledLink>
          </DataContent>
            </DataContainer>
            <DataContainer>
          
           < IoArrowBackCircleOutline onClick={toggleModal}  style={{ fontSize: "2.5rem" }}/>
           <div onClick={clickHandler}>
           <BsFillHeartFill className={props.isFavourite ? "active" : "noActive"} />

           </div>
          

            </DataContainer>

          </TrackInfo>
          
          
          </TrackModal>
        

        
        
        </StyledModal>
      </div>
    );
  }

  export default ModalInfo;