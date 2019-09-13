import React from "react";
import styled from "styled-components";

const Titlee = styled.h1`
color: ${props=> (props.goldy ? "gold" : null)};
`;
const Textt = styled.p`
color: yellow;
`;
const Bc = styled.div`
background-image: url('https://wallpaperplay.com/walls/full/b/e/4/124178.jpg');
`;


const PeopleCard = props => {
return(
  <Bc className="ch" key={props.id}>
 <Textt>Name: {props.name}</Textt>
 <Textt>Gender: {props.gender}</Textt>
 <Textt>Hair Color: {props.hair_color}</Textt>
 <Textt>Height: {props.height}</Textt>
  </Bc>
)

}







export default PeopleCard;