import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../service/trackService";
import Track from "./Track";
const Favourite = () => {
  let favourite;
  useEffect(async () => {
    favourite = await getFavourite();
  });

  const tracks = favourite.map((track) => (
    <Track title={track.title} id={track._id} isClicked={track.isClicked} />
  ));

  return (
    <div>
      <ul>{favourite.length > 0 ? tracks : "you dont hace favourite music"}</ul>
    </div>
  );
};

export default Favourite;
