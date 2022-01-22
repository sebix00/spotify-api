import { useState, useEffect, Suspense } from "react";

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
