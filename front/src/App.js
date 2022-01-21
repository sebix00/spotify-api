import logo from "./logo.svg";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { useState,useEffect ,Suspense } from "react";
import {
  deleteTrack,
  getFavourite,
  getTracks,
  saveTrack,
} from "../src/service/trackService";
import Header from "./components/Header";
import TrackList from "./trackList";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors:{
    header:'#ebffff',
  }
}

function App() {
  const [trackList, setTrackList] = useState([]);
  const [artistName, setAritsName] = useState("");
  const [element, setElement] = useState("");

  const [favTrack,setFavTrack] = useState("");


  const[title,setTitle]=useState("");
  const [desc,setDesc] = useState("");

  const track = {title,body:desc,id:4}


  // db connection
  const fetchTracks = async()=>{
    const res = await getFavourite();
    const tracks = res.data;
    setFavTrack(tracks);
  }

  useEffect(()=>{
    fetchTracks();
  },[]);
  



  const titleHandler = event=>{
    setTitle(event.target.value);
  }

  const descHandler = event=>{
    setDesc(event.target.value);
  }
  const addTrack  = async(track)=>{
    const res = await saveTrack(track);
  }

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <div className="App">
      <input onChange={inputHandler} />
      <button onClick={handleClick}>Szukaj</button>
      <Suspense fallback={<h1>Loading data</h1>}>
        <TrackList tracks={trackList} />
      </Suspense>

      <input onChange={titleHandler} />
      <input onChange={descHandler} />
      <button onClick={()=>{addTrack(track)}}> Save track </button>
      <Header />
  
    </div>
    </ThemeProvider>
  );
}

export default App;
