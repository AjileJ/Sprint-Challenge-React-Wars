import React from "react";
import styled from "styled-components";

const titlee = styled.h1`
color: ${props=> (props.goldy ? "gold" : null)};
`;
const textt = styled.p`
color: yellow;
`;


const PeopleCard = props => {
return(
  <div key={props.id}>
 <h1 goldy>Name: {props.name}</h1>
 <textt>Gender: {props.gender}</textt>
 <p>Hair Color: {props.hair_color}</p>
 <p>Height: {props.height}</p>
  </div>
)

}







export default PeopleCard;