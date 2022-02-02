import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userInput";
import { fetchingTrackData } from "../store/track-actions";
import { StyledInput } from "./styles/Input.styled";
import { Error } from "./styles/Common.styled";
import { IconBox } from "./styles/Input.styled";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";

const hasThreeCharacters = value =>value.trim().length >2;
const Input = (props) => {

  const [inputIsValid,setInputIsValid] = useState(true);
  const [error,setError] = useState("");
  const dispatch = useDispatch();

  const input = useSelector(state=>state.input.input);
 
  const inputHandler = (event) => {
    dispatch(userActions.handleInput(event.target.value));
    setInputIsValid(hasThreeCharacters(event.target.value));
   
   
  };
  const name = useSelector(state=>state.input.input);
  const getTrackHandler = ()=>{
    dispatch(fetchingTrackData(name));
  }
 useEffect(()=>{
  if(inputIsValid){
    setError("");
  }
  else{
    setError("Please enter at least 3 characters ")
  }

 },[input])
 


  const searchTrack = event =>{
    event.preventDefault();
    if(inputIsValid){
      getTrackHandler();
    } else{
      setError("Please enter at least 3 characters ")
    }

  }




  return (
    <StyledInput
      onSubmit={searchTrack}
    >
      <input type="text" placeholder="Artist" onChange={inputHandler} />
      <IconBox
      onClick={searchTrack}
      >
        <AiOutlineSearch style={{ color: "#fff", fontSize: "2rem" }} />
      </IconBox>
      <Error>{error}</Error>
    </StyledInput>
  );
};

export default Input;
