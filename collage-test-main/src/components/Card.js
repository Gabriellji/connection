import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 5%;
  width: 40vw;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  background-color: aqua;
  padding: 8px;
  @media (min-width: 768px) {
    width: 30vw;
    height: 70vh;
  }
`;
const StyledText = styled.p`
  text-align: center;
  font-weight: ${p => p.type === "title" && "bold"};
`;
const StyledImage = styled.img`
  width: 80%;
  height: auto;
`;

const Card = ({ title, url, text, alt }) => (
  <CardContainer>
    <StyledText type="title">{title}</StyledText>
    <StyledImage src={url} alt={alt}></StyledImage>
    <StyledText type="text">{text}</StyledText>
  </CardContainer>
);

export default Card;