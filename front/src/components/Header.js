import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Logo} from "./styles/Header.styled";
import { NavLinks } from "./styles/Header.styled";
import Input from "./Input";
import a from "./assets/logo.svg"
import { FlexRow } from "./styles/FlexRow.styled";


const Header= props=>{

    return (
        <StyledHeader>
           <FlexRow>
           <Logo src={a}/>
                <Input />
           </FlexRow>
                 <FlexRow>
                 <li>Favourite</li>
                <li>Theme</li>

                 </FlexRow>
   
        </StyledHeader>
    )
}

export default Header;