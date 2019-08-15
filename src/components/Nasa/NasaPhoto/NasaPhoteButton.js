import React from "react"; 
import styled from 'styled-components';
import { Button, Segment } from 'semantic-ui-react'
import  "semantic-ui-css//semantic.min.css";


const NasaPhotoButton = (props) => {
    console.log("I am in NasaPhotoTitle."); 
    return (
        <>
            
            <Segment inverted>
      <Button href="https://en.wikipedia.org/wiki/List_of_galaxies"inverted> Wiki</Button>
      <Button href="https://en.wikipedia.org/wiki/Andromeda_Galaxy" inverted color='red'>
      Andromeda Galaxy
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Antennae_Galaxies" inverted color='orange'>
      Antennae Galaxies
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Black_Eye_Galaxy" inverted color='yellow'>
      Black Eye Galaxy
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Messier_81" inverted color='olive'>
      Bode's Galaxy
      </Button>
      <Button href="https://en.wikipedia.org/wiki/Butterfly_Galaxies"  inverted color='green'>
      Butterfly Galaxies
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Cartwheel_Galaxy" inverted color='teal'>
      Cartwheel Galaxy
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Cigar_Galaxy" inverted color='blue'>
      Cigar Galaxy
      </Button>
      <Button href="https://en.wikipedia.org/wiki/Circinus_Galaxy"  inverted color='violet'>
      Circinus Galaxy
      </Button>
      
      
      
    </Segment>
    <Segment inverted>
      <Button href="https://en.wikipedia.org/wiki/List_of_galaxies" inverted> Image</Button>
      <Button href="https://www.google.com/imgres?imgurl=http%3A%2F%2Fscienews.com%2Fimages%2F2018%2F02%2F5a05bbb67cbdd5a22cabee17b94b3986.jpg&imgrefurl=https%3A%2F%2Fscienews.com%2Fcosmos%2F3329-10-fun-facts-about-the-andromeda-galaxy.html&docid=mN5BmyvpFtbleM&tbnid=OHqWB2Pg0IMcHM%3A&vet=10ahUKEwim7fGP-oXkAhUHPq0KHXxhBe8QMwiJASgTMBM..i&w=1280&h=800&bih=846&biw=1762&q=andromeda%20galaxy&ved=0ahUKEwim7fGP-oXkAhUHPq0KHXxhBe8QMwiJASgTMBM&iact=mrc&uact=8" basic inverted color='red'>
      Andromeda Galaxy
      </Button>
      <Button  href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.almaobservatory.org%2Fwp-content%2Fuploads%2F2011%2F10%2FESO_ALMA_earlyscience_a-1.jpg&imgrefurl=https%3A%2F%2Fwww.almaobservatory.org%2Fen%2Fimages%2Fantennae-galaxies-composite-of-alma-and-hubble-observations%2F&docid=7w7BXg-Wc9JTFM&tbnid=rK75YeBxuxYPqM%3A&vet=10ahUKEwjw8q-6-oXkAhUHQK0KHXhJB-sQMwhzKAswCw..i&w=1200&h=1195&bih=846&biw=1762&q=antennae%20galaxies&ved=0ahUKEwjw8q-6-oXkAhUHQK0KHXhJB-sQMwhzKAswCw&iact=mrc&uact=8" basic inverted color='orange'>
      Antennae Galaxies
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Black_Eye_Galaxy" basic inverted color='yellow'>
      Black Eye Galaxy
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Messier_81" basic inverted color='olive'>
      Bode's Galaxy
      </Button>
      <Button href="https://en.wikipedia.org/wiki/Butterfly_Galaxies" basic inverted color='green'>
      Butterfly Galaxies
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Cartwheel_Galaxy"basic inverted color='teal'>
      Cartwheel Galaxy
      </Button>
      <Button  href="https://en.wikipedia.org/wiki/Cigar_Galaxy" basic inverted color='blue'>
      Cigar Galaxy
      </Button>
      <Button href="https://en.wikipedia.org/wiki/Circinus_Galaxy"basic inverted color='violet'>
      Circinus Galaxy
      </Button>
      
      
      
    </Segment>
            
        </>
    );


    // return (
    //     <>
    //         <h1> {props.title} </h1>
    //     </>
    // );
};

export default NasaPhotoButton;