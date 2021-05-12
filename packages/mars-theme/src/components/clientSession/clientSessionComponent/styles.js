import { styled } from "frontity";

const colorWhite = "#fff";

export const Container = styled.section`
  height: calc(100vh - 140px);
  width: 100%;
  display: flex;
  position: relative;

  background: #363636;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    bottom: 0;
    background: rgba(232, 23, 93, 0.75);
  }
`;

export const BoxContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;

  margin: 0 230px;
  padding: 10px 0 65px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  svg {
    height: 25px;
    stroke: ${colorWhite};
    stroke-width: 3;
  }
`;

export const Titlle = styled.h1`
  color: ${colorWhite};
`;

export const BoxContext = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const BoxImage = styled.figure`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    filter: drop-shadow(0px 0px 8px #000);
  }
`;

export const BoxContentTexts = styled.div`
  color: ${colorWhite};
  margin-left: 50px;

  span {
    font-weight: bold;
    font-size: 1.5rem;
  }

  p {
    margin-top: 25px;
    font-size: 1.1rem;
  }
`;
