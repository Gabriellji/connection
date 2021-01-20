import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";

const StyledCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
`;

const CardGroup = () => {
  const [pictures, setPictures] = useState([]);

  /* part11: displaying pictures */
  useEffect(() => {
    let images = [];
    console.log(window.localStorage)
    if (window.localStorage.length>0) {
      for (let i = 0; i < window.localStorage.length; i++) {
        images.push(JSON.parse(window.localStorage.getItem(i)));
        setPictures(images);
        console.log(pictures)
      }
    }
  }, []);

  return (
    <StyledCardGroup>
      {pictures.length > 0 &&
        pictures.map((picture, index) => (
          <Card
            key={index}
            url={picture.origin}
            title={picture.filename}
            text={picture.caption}
            alt={picture.alt}
          />
        ))}
    </StyledCardGroup>
  );
};

export default CardGroup;
