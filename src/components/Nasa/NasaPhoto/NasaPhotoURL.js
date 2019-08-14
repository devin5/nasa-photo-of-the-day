import React from "react"; 

const NasaPhotoURL = (props) => {
    return (
        <>
            <img src={props.img_url} alt="Nasa Image of the Day:" />
        </>
    );
};

export default NasaPhotoURL; 