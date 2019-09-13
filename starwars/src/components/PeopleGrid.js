import React, {useState, useEffect} from "react";
import axios from "axios";
// import PeopleCard from "./PeopleCard";

export default function PeopleGrid(){

  const [chars, setChars] = useState([]);

  useEffect(()=> {
    axios.get("http https://swapi.co/api/people/")
    .then(response => {
      const chars = response.data;
      console.log("This is the response log ", chars);
      setChars(chars);
    })
    .catch(error => {
      console.log("this is an error message", error);
    });
  },[]);

  return(
    <div className = "characters">
      {chars.map(char => {
        return(
          {/* <PeopleCard 
          

          /> */}
        )
      })}
    </div>
  )

}
















