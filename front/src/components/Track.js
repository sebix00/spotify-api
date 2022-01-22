import { AiOutlineHeart } from "react-icons/ai";
import { StyledTrack } from "./styles/Track.styled";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userInput";
import { useSelector } from "react-redux";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../service/trackService";

const Track = (props) => {
  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  const track = {
    title: props.title,
    id: props.id,
  };

  //   const addToFavouriteHandler = () => {
  //     dispatch(userActions.hendleAddFavourite(track));
  //   };
  let favourite;
  useEffect(async () => {
    const contain = favourite.some((fav) => fav._id === track.id);
    if (contain) {
      setIsClicked(true);
    }
    favourite = await getFavourite();
  }, [favourite]);

  const clickHandler = async () => {
    const contain = favourite.some((fav) => fav._id === track.id);
    setIsClicked(true);
    if (contain) {
      await deleteTrack(track.id);
      setIsClicked(false);
    } else {
      await saveTrack(track.id);
    }
  };

  return (
    <StyledTrack>
      {props.title}
      <div onClick={clickHandler}>
        <AiOutlineHeart
          style={{ fontSize: "2.5rem" }}
          className={isClicked ? "active" : ""}
        />
      </div>
    </StyledTrack>
  );
};

export default Track;
