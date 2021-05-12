import { styled } from "frontity";
// import Link from "../link";

export const Container = styled.header`
  position: fixed;
  width: 100%;
  height: 140px;
  top: 0;
  z-index: 999;

  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  background: #363636;
  padding: 0 140px;
  color: #fff;

  box-shadow: 0px 10px 0px 0px #debfca;
`;

export const BoxContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const BoxContentImage = styled.figure`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BoxContentNav = styled.nav`
  height: 100%;
  position: relative;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  font-size: 0.9rem;

  font-weight: bold;

  a {
    display: flex;
    align-items: center;

    color: #fff;
    letter-spacing: 1px;
    position: relative;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #debfca;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      -webkit-transition: all 0.3s ease-in-out 0s;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
`;

export const BoxContentButtom = styled.div`
  position: relative;
  width: 180px;
  height: 45%;
  max-height: 40.5px;
  display: flex;
  align-items: center;
`;

export const BoxExposeDataOparion = styled.div`
  width: 100%;
  height: 40px;
  position: relative;

  background: #000;

  margin-top: 10px;

  img {
    width: 100%;
    background-size: cover;
    height: 40px;
  }
`;

// export const Title = styled.h2`
//   margin: 0;
//   margin-bottom: 16px;
// `;

// export const Description = styled.h4`
//   margin: 0;
//   color: rgba(255, 255, 255, 0.7);
// `;

// export const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
