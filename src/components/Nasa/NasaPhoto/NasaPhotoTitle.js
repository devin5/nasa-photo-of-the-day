import React from "react"; 
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100%; 
    height: 100%; 
    margin: auto; 
`;

const StyledH1 = styled.h1`
    width:31%;
    margin: 0 auto;
    margin-right:750px;
    // padding-right: 100px;
    color: #F4C86F;
    opacity: 0.3;
    font-size: 3rem;
    background-color:#532E71  ;
    border: 1px solid white;
    border-radius: 25%;
    padding-bottom:5px;
`;
const NasaPhotoTitle = (props) => {
    console.log("I am in NasaPhotoTitle."); 
    return (
        <>
            <WrapperDiv>
                <StyledH1 > {props.title} </StyledH1>
            </WrapperDiv>
        </>
    );


    // return (
    //     <>
    //         <h1> {props.title} </h1>
    //     </>
    // );
};

export default NasaPhotoTitle;