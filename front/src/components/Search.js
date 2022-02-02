import Input from "./Input";
import { Title } from "./styles/Search.styled";
import { StyledSearch } from "./styles/Search.styled";
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
