import styled from "styled-components"

export const StyledSearch = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-bottom:6rem;
`

export const Title = styled.h1`
font-size:3.5rem;
font-weight:700;
color:${({theme})=>theme.colors.title};
letter-spacing:0.8px;
margin-bottom:2.2rem;
text-align:center;
`
export const  StyledSpan = styled.span`
color:rgb(206, 72, 72);
`