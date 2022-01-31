import { useState, useEffect, Suspense } from "react";
import { useSelector } from "react-redux";

import Search from "./components/Search";

import TrackList from "./components/TrackList"

const Default = () => {
  const tracks = useSelector(state=>state.input.tracks);
  return (
    <>
      <Search />
      <TrackList tracks={tracks} />
    </>
  );
};

export default Default;
