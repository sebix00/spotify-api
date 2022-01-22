import { AiOutlineHeart } from "react-icons/ai";
import { StyledTrack } from "./styles/Track.styled";
import { useState } from "react";

const Track = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <StyledTrack>
      {props.title}
      <div onClick={()=>{clickHandler(); console.log("klikam")}}>
      <AiOutlineHeart style={{ fontSize: "2.5rem",  }} className={(isClicked ?'active' : '')} />
      </div>
     
    </StyledTrack>
  );
};

export default Track;
