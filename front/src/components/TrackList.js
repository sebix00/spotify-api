import { StyledTrackList } from "./styles/TrackList.styled";
import { useSelector } from "react-redux";
import Track from "./Track";
import spiner from "./assets/loading.gif"
import { StyledLoad,StyledInfo } from "./styles/Common.styled";


const TrackList = (props) => {

  const fav = useSelector(state=>state.favourite.trackList);
  const isLoading = useSelector(state=>state.input.isLoading);
  const tracks = props.tracks


  

  let list;

  if(tracks.length>0){
  list = tracks.map(track=>{

     const isFav= fav.some(f=>f.id===track.id);
      return( 
              <Track 
                title={track.title}
                artist={track.artist}
                key={track.id}
                id={track.id}
                isFavourite={isFav} 
                img={track.img}
                music={track.music}
                spotify={track.spotify}
                duration={track.duration}
                popularity={track.popularity}
              />)
  })
  }

  const loadingGif=  <StyledLoad src={spiner} alt= "data is loading" />



  return (
    <>
  <StyledTrackList>
    {isLoading? loadingGif :(list? list :<StyledInfo>Please enter some artist</StyledInfo> )  }
    </StyledTrackList>
    </>
    );
};

export default TrackList;
