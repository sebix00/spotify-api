import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userActions } from "../store/userInput";

import { StyledInput } from "./styles/Input.styled";
import { IconBox } from "./styles/Input.styled";
import { AiOutlineSearch } from "react-icons/ai";


const Input = (props) => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.input.input);

  const inputHandler = (event) => {
    dispatch(userActions.handleInput(event.target.value));
  };

  return (
    <StyledInput
      onSubmit={(event) => {
        event.preventDefault();
        console.log(name);
      }}
    >
      <input type="text" placeholder="Artist" onChange={inputHandler} />
      <IconBox
        onClick={() => {
            console.log(name);
        }}
      >
        <AiOutlineSearch style={{ color: "#fff", fontSize: "2rem" }} />
      </IconBox>
    </StyledInput>
  );
};

export default Input;
