import { styled } from "frontity";

export const Container = styled.section`
  height: calc(100vh - 140px);

  width: 100%;
  display: flex;
  justify-content: center;

  position: relative;

  .image_container {
    height: 120px;
    position: absolute;

    img {
      height: 100%;
      width: 100%;
    }
  }
`;
export const BoxContext = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1440px;

  padding: 55px 0;

  display: flex;
  justify-content: center;
`;
export const BoxContentWallet = styled.div`
  width: 30%;

  display: flex;
  flex-direction: column;

  padding: 45px 40px;
  border-radius: 40px;

  background: #fff;
  box-shadow: 0px 0px 16px 3px rgba(0, 0, 0, 0.66);

  z-index: 2;

  &:last-child {
    margin-left: 75px;
  }

  svg {
    height: 2px;
    stroke: #e8175d;
    stroke-width: 3px;

    margin: 15px 0;
  }
`;

export const BoxContentWalletHeader = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #2b2b2b;
    font-weight: 300;

    strong {
      font-weight: 700;
    }
  }

  span {
    color: #e8175d;
    font-weight: 600;
    font-size: 0.75rem;
    font-style: italic;
  }
`;
export const BoxContentWalletBody = styled.p`
  flex: 1;
  font-size: 0.8rem;
`;
export const BoxContentWalletFooter = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  input {
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    width: 40%;
    padding: 5px 10px;
  }
`;
