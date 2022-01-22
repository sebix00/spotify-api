import { Container } from "./styles/Container.styled";
import Input from "./Input";
import { Title } from "./styles/Search.styled";
import { StyledSearch } from "./styles/Search.styled";

const Search = () => {
  return (
    <StyledSearch>
      <Title>How can we help you?</Title>
      <Input />
      
    </StyledSearch>
  );
};
export default Search;
