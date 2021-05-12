import { styled } from "frontity";
import swingTrade from "../../../static/images/illustrations/swing-trade.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;

  background-image: url(${swingTrade});
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
    font-size: 0.9rem;
    letter-spacing: 1px;
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
