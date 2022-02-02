import React, { useState, useEffect } from "react";
import {BsPlayCircle,BsPauseCircle} from "react-icons/bs";
import { AudioButton,AudioStyled } from "./styles/Audio.styled";

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};


const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <AudioStyled>
      <AudioButton onClick={toggle}>{playing ?<BsPauseCircle /> : <BsPlayCircle />}</AudioButton>
    </AudioStyled>
  );
};

export default Player;