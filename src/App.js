//import React from "react";
import React, {useState, useEffect} from "react"; 

import axios from "axios"; 

// import NasaPhotoCard from "./Components/PictureCall";  // data: title, date, url, explanation
//import NasaPhotoCard from "./components/PictureCall"; // works with old folder structure
import NasaPhotoCard from "./components/Nasa/NasaPhoto/NasaPhotoCard"; 
import "./App.css";
// import  "semantic-ui-css//semantic.min.css";
import styled from 'styled-components';

function App() {
  // var nasaPhotoURL = "https://api.nasa.gov/planetary/apod";
  var nasaPhotoURL = "https://api.nasa.gov/planetary/apod?api_key=B4l8sEsSgPnUTXpRJS6a1w8PnhM5tRCaD7621PDk&date=2019-08-14"; 

  const [nasaHeaderData, setNasaHeaderData] = useState("");
  const [nasaDateData, setNasaDateData] = useState("");
  const [nasaPhotoData, setNasaPhotoData] = useState("");
  const [nasaExplanationData, setNasaExplanationData] = useState(""); 

  useEffect(() => {
    axios.get(nasaPhotoURL)
      .then((response) => {
        console.log("response: " + response.data); 
        if(response.data.media_type === "image"){
          setNasaHeaderData(response.data.title); 
          setNasaDateData(response.data.date); 
          setNasaPhotoData(response.data.url); 
          setNasaExplanationData(response.data.explanation); 
        }
        else{
          alert("Photo of the day is a video!"); 
        }
      }).catch((error) => {
        console.log("Error: " + error); 
      }); 
  }, []); // No state or props synchronized with this. 


  return (
    <div className="App">
      {/* <p> */}
        {/* Read through the instructions in the README.md file to build your NASA */}
        {/* app! Have fun ??! */}
      {/* </p> */}

      <NasaPhotoCard title={nasaHeaderData} date={nasaDateData} img_url={nasaPhotoData} explanation={nasaExplanationData} /> 

    </div>
  );
}

export default App;