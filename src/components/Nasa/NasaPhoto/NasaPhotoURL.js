import React from "react"; 
import styled, { keyframes } from 'styled-components';
import {Reveal} from "semantic-ui-react";

const WrapperDiv = styled.div`
    width: 100%; 
    height: 100%; 
//     margin: auto; 
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledImg = styled.img`
    width: 30%;
    margin-right: 35%;
    border-radius: 50%; 
    // animation: nasa-photo-spin infinite 20s linear;
    animation: ${rotate360} infinite 120s linear;
    height: 50vmin;
    pointer-events: none;
`;

// @keyframes nasa-photo-spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }

const NasaPhotoURL = (props) => {

    return (
        <>
            <WrapperDiv>
                <StyledImg src={props.img_url} />
            </WrapperDiv>
        </>
    );

    // return (
    //     <>
    //         <img src={props.img_url} alt="Nasa Image of the Day:" />
    //     </>
    // );
};

export default NasaPhotoURL; 