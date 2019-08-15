import React from "react"; 

import NasaPhotoTitle from "./NasaPhotoTitle"; 
import NasaPhotoDate from "./NasaPhotoDate"; 
// import NasaPhotoURL from "./PictureDiv"; 
import NasaPhotoURL from "./NasaPhotoURL"; 
import NasaPhotoExplanation from "./NasaPhotoExplanation"; 
import NasaPhotoButton from "./NasaPhoteButton"
const NasaPhotoCard = (props) => {
    return (
        <div className="" >
             <NasaPhotoTitle title={props.title}/>
             <NasaPhotoDate date={props.date} /> 
             <div className="imgDiv">
             <NasaPhotoURL img_url={props.img_url} />
             <NasaPhotoExplanation explanation={props.explanation} /> 
             </div>
             <NasaPhotoButton />
        </div>

    );
};

export default NasaPhotoCard; 