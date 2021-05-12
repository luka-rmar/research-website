import { styled, keyframes } from "frontity";

const neonEffect = keyframes`
  from {
    box-shadow: 0 0 2px #FF1177, 0 0 6px #FF1177 ;

  }
  to {
    box-shadow: 0 0 6px #FF1177, 0 0 10px #FF1177;

  }

`;

export const Container = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.filled ? "#f21b8e" : "transparent")};
  position: relative;
  cursor: pointer;

  padding: 12px 28px;
  color: ${(props) => (props.filled ? "#fff" : "#f21b8e")};
  font-weight: bold;
  display: flex;

  align-items: center;

  border: none;
  border-radius: 10px;

  transition: 0.3s;

  animation: ${neonEffect} 1s ease-in-out infinite alternate;

  img {
    width: 25px;
    height: 25px;
    margin-left: 30px;
    filter: invert(100%);
  }

  &:hover {
    background: #f21b8e;
    color: ${(props) => !props.filled && "#fff"};

    /* animation: none; */
  }
`;
