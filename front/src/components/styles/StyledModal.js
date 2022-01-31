import styled from 'styled-components'
import Modal from "styled-react-modal";
import a from "../assets/stars-light.png";
import b from "../assets/stars-fill.png";
import { BsFillHeartFill } from "react-icons/bs";
export const StyledModal = Modal.styled`
  width: 36rem;
  height: 55rem;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;
  export const TrackModal = styled.div`
  height:inherit;
  width:inherit;
  `
  export const TrackInfo = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
  height:19rem;
  padding:1rem 2rem;
  transitoin:all .2s;

  .active{
    color:rgb(206, 72, 72);
    font-size: 2.5rem;
}
.noActive{
  font-size: 2.5rem;
   color:rgb(125,125,125);
}
 
  `;
  export const DataContainer = styled.div`
  display:flex;
  justify-content:space-between;

  `;

  export const TrackImg = styled.img`
  display:inline-block;
  width:100%;
  `
  export const DataTitle = styled.p`
  width:48%;
  font-size:1.6rem;
  text-transform:uppercase;
  font-weight:600;

  `
  export const DataContent = styled.p`
  width:52%;
  font-size:1.6rem;
  color:rgb(206, 72, 72);
  font-weight:600;
  display:flex;
  align-items:center;
  `
  export const StyledLink = styled.a`
  text-decoration:none;
  color:rgb(206, 72, 72);
  `

export const Back = styled.div`
background-image: url(${a});
width:10rem;
height:2rem;
background-size:contain;
background-repeat:no-repeat;

`
export const Front = styled.div`
background-image: url(${b});
width:9.2rem;
height:2rem;
background-size:contain;
background-repeat:no-repeat;
height:100%;
clip-path:inset(0 ${({per})=>100-per}% 0 0);
`