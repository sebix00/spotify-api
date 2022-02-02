import { StyledHeader } from "./styles/Header.styled";
import { Logo } from "./styles/Header.styled";
import logo from "./assets/logo.svg";
import { NavLink } from "react-router-dom";  
import { NavUnListed } from "./styles/Header.styled";
import {Nav} from "./styles/Header.styled"


const Header = () => {
  return (
    <StyledHeader>
   
        <Nav>
          <Logo src={logo} alt="logo" />
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
