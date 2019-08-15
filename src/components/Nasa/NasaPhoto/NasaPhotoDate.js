
import React from "react"; 
import styled from "styled-components";

const DateWrapperDiv = styled.div`
      
       
`;
const DateH2 = styled.h2`
      margin-left: 730px;
      width:10%;
      background-color:burlywood;
      opacity: .3;
      color:#532E71   ;
      border: 1px solid white;
`;
const NasaPhotoDate = (props) => {
    return (
        <>
            <DateWrapperDiv>
                <DateH2 > {props.date} </DateH2>
            </DateWrapperDiv>
        </>
    );
};

export default NasaPhotoDate; 




