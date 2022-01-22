import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Logo } from "./styles/Header.styled";
import { NavLinks } from "./styles/Header.styled";
import Input from "./Input";
import a from "./assets/logo.svg";
import { FlexRow } from "./styles/FlexRow.styled";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";  
import { NavUnListed } from "./styles/Header.styled";
import {Nav} from "./styles/Header.styled"
import { Flex } from "./styles/Flex.styled";

const Header = (props) => {
  return (
    <StyledHeader>
   
        <Nav>
          <Logo src={a} alt="logo" />
          <NavUnListed>
            <NavLink to="/" className={({isActive}) =>(isActive ?'active' : '')} >
              <li>Home</li>
            </NavLink>
            <NavLink to="/favourite" className={({isActive}) =>(isActive ?'active' : '')} >
              <li>Favourite</li>
            </NavLink>
            <NavLink to="/about" className={({isActive}) => (isActive ?'active' : '')} >
              <li>About</li>
            </NavLink>
          </NavUnListed>
        </Nav>
    
    </StyledHeader>
  );
};

export default Header;
