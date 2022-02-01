import { Container } from "./styles/Container.styled";
import Input from "./Input";
import { Title } from "./styles/Search.styled";
import { StyledSearch } from "./styles/Search.styled";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { StyledSpan } from "./styles/Common.styled";

const Search = () => {
 
  return (
    <StyledSearch>
      <Title>
        What <StyledSpan>song</StyledSpan> are you looking for?</Title>
      <Input />
      
    </StyledSearch>
  );
};
export default Search;
