import React from "react"; 
import styled from 'styled-components';

const StyledP = styled.p`

// margin:4%;
width: 30%;
// float:right;
    background-color: rgba(222,184,135,0.4);
    opacity: 0.4;
       color:white   ;
//     border-radius: 50%; 
    padding: 1%;
    font-size:1.3rem;
`;

const NasaPhotoExplanation = (props) => {

    return (
        <>
            <StyledP> {props.explanation} </StyledP>
        </>
    );

    // return (
    //     <>
    //         <p> {props.explanation} </p>
    //     </>
    // );
};

export default NasaPhotoExplanation;