import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 3rem;
  color: red;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  width:100%;
`;
export const Logo = styled.img``;

export const NavUnListed = styled.ul`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: ${({theme})=>theme.colors.navLink};
    margin: 0 rem;
    font-size: 2rem;
    list-style: none;
  }

  .active {
    li {
      border-bottom: 2px solid black;
    }
  }
`;
