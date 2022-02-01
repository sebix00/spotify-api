import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { favouriteAction } from "./store/favourite-slice";
import { getFavourite, getTracks } from "./service/trackService";
import Search from "./components/Search";

import TrackList from "./components/TrackList"

const Default = () => {

  const dispatch = useDispatch();

  useEffect(async()=>{
    const tracks = await getFavourite();
    dispatch(favouriteAction.replaceFavourite(tracks.data));
    console.log(tracks.data);

  },[])

  const tracks = useSelector(state=>state.input.tracks);
  return (
    <>
      <Search />
      <TrackList tracks={tracks} />
    </>
  );
};

export default Default;
