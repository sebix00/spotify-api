import logo from "./logo.svg";
import "./App.css";
import { useState, Suspense } from "react";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../src/service/trackService";
import TrackList from "./trackList";

function App() {
  const [trackList, setTrackList] = useState([]);
  const [artistName, setAritsName] = useState("");
  const [element, setElement] = useState("");

  const inputHandler = (evetn) => {
    setAritsName(evetn.target.value);
  };

  const handleClick = async (e) => {
    const data = await getTracks(artistName);
    console.log(data)
    setTrackList(data.data);

    // const data = await result.json();
  };
  return (
    <div className="App">
      <input onChange={inputHandler} />
      <button onClick={handleClick}>Szukaj</button>
      <Suspense fallback={<h1>Loading data</h1>}>
        <TrackList tracks={trackList} />
      </Suspense>
    </div>
  );
}

export default App;
