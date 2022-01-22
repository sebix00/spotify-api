import { useState, useEffect, Suspense } from "react";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../src/service/trackService";
import Search from "./components/Search";

import TrackList from "./components/TrackList"

const Default = () => {
  return (
    <>
      <Search />
      <TrackList />
    </>
  );
};

export default Default;
