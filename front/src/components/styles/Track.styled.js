import styled from "styled-components";

export const StyledTrack = styled.div`
display:flex;
// width:35rem;
border: 1px solid rgb(125,125,125);
padding:2rem;
border-radius:20px;

.active{
color:rgb(206, 72, 72);
font-size: 2.5rem;
}
.noActive{
font-size: 2.5rem;
color:rgb(125,125,125);
  }
`
export const TrackImg = styled.img`
height:12rem;
margin-right:1rem;
`

export  const ArtistName = styled.h1`
font-weight:600;
font-size:2.5rem;
color:${({theme})=>theme.colors.title};
`
export const Title = styled.h2`
color: rgb(206, 72, 72);
font-size:2.2rem;
font-weight:600;

`
export const TrackInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:100%;

`
export const TrackButtons = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`
export const TrackButton = styled.button`
background-color:transparent;
border-radius:20px;
border:.2rem solid rgb(125,125,125);
// width:10rem;
font-size:1.5rem;
padding:0.6rem 2.8rem;
color:rgb(125,125,125);
font-weight:600;
&:hover{
    color: rgb(206, 72, 72);
    border:.2rem solid  rgb(206, 72, 72);
}

`