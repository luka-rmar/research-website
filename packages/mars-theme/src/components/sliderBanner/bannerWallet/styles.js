import { styled } from "frontity";
import walletImage from "../../../static/images/illustrations/wallet.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  background-image: url(${walletImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: inherit;

  /* img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: fill;
  } */
`;

export const BoxContext = styled.div`
  width: 50%;
  height: 100%;
  padding-right: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* margin-right: 50px; */

  color: #fff;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
    letter-spacing: 2.5px;

    &:first-child {
      margin-bottom: -10px;
    }
  }

  span {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
    font-style: italic;

    &:nth-of-type(2) {
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 300;
      margin-top: 15px;
    }
  }
`;

export const BoxContentButtom = styled.div`
  position: relative;
  width: 180px;
  height: 45%;
  max-height: 40.5px;
  margin-top: 70px;

  display: flex;
  align-items: center;
`;
