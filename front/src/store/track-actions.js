import { userActions } from "./userInput";
import { getTracks,getFavourite} from "../service/trackService"

import { favouriteAction } from "./favourite-slice";



export const fetchingTrackData = (name)=>{

   
    return async (dispatch) =>{
   
 
      const fetchData = async()=>{
        const resp = await getTracks(name);

        return resp;
      }
      try{
        dispatch(userActions.setLoading(true));
        fetchData().then(track=>{
          dispatch(userActions.replaceTrack(track.data));
          dispatch(userActions.setLoading(false));
        })

      
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

        dispatch(favouriteAction.replaceFavourite(fav));
    
      }catch(err){
        throw new Error("Fetching fav track failed");
  
      }
    }
  }