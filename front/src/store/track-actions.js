import { useSelector } from "react-redux";
import { userActions } from "./userInput";
import { getTracks,getFavourite} from "../service/trackService"

import { favouriteAction } from "./favourite-slice";



export const fetchingTrackData = (name)=>{
  console.log("Search track")
   
    return async (dispatch) =>{
   
 
      const fetchData = async()=>{
        const resp = await getTracks(name);
  
        // if(!resp.ok){
        //   throw new Error("Fetching data failed");
        // }
        return resp;
      }
      try{
        dispatch(userActions.setLoading(true));
        fetchData().then(track=>{
          dispatch(userActions.replaceTrack(track.data));
          dispatch(userActions.setLoading(false));
        })
        // const track = await fetchData();
        // dispatch(userActions.replaceTrack(track.data));
      
      }catch(err){
        throw new Error("Fetching data failed");
      }
  
    }
  }

  export const fetchingFavourite=()=>{
    return async(dispatch)=>{
      const fetchData= async ()=>{
        const data= await getFavourite();
      
  
        return data.data;
      }
      try{
  
        const fav = await fetchData();
        console.log(fav);
        dispatch(favouriteAction.replaceFavourite(fav));
    
      }catch(err){
        throw new Error("Fetching fav track failed");
  
      }
    }
  }