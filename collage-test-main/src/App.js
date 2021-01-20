import styled from "styled-components";
import CardContainer from "./components/CardContainer";

const PopUpModal = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: red;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 10vw;
`;

const App = () => (
  <PopUpModal>
    {/* STEP 1. WHEN I CLICK ON THIS BUTTON I RUN A FUNCION INSIDE POPUP.JS */}
    <button id="getImages">click me</button>
    <CardContainer />
  </PopUpModal>
);

export default App;
