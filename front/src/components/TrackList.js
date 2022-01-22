import { StyledTrackList } from "./styles/TrackList.styled";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Track from "./Track";

import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../service/trackService";

const TrackList = () => {
  const aritsName = useSelector((state) => state.input.input);

  let track;
  useEffect(async () => {
    track = await getTracks(aritsName);
  });

  const element = track.map((track) => (
    <Track title={track.title} key={track.id} id={track.id} />
  ));

  return <StyledTrackList>{element}</StyledTrackList>;
};

export default TrackList;
