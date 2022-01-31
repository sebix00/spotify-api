import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userInput";
import { fetchingTrackData } from "../store/track-actions";
import { StyledInput } from "./styles/Input.styled";
import { IconBox } from "./styles/Input.styled";
import { AiOutlineSearch } from "react-icons/ai";


const Input = (props) => {
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    dispatch(userActions.handleInput(event.target.value));
  };
  const name = useSelector(state=>state.input.input);
  const getTrackHandler = ()=>{
    dispatch(fetchingTrackData(name));
  }


  return (
    <StyledInput
      onSubmit={(event) => {
        event.preventDefault();
        getTrackHandler();
      }}
    >
      <input type="text" placeholder="Artist" onChange={inputHandler} />
      <IconBox
      onClick={getTrackHandler}
      >
        <AiOutlineSearch style={{ color: "#fff", fontSize: "2rem" }} />
      </IconBox>
    </StyledInput>
  );
};

export default Input;
