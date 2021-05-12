import { styled, keyframes } from "frontity";

const animateSVG = keyframes`
  from {
    stroke-dashoffset: 822;
  }

  to {
    stroke-dashoffset: 0;
  }

`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #f3f3f3;
  position: relative;
`;

export const BoxImageBackgroudWave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    filter: contrast(200%) brightness(150%);
    width: 100%;
    object-fit: cover;
  }
`;

export const BoxImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  img {
    width: 45%;
  }
`;
