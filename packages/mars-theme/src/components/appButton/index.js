import { connect } from "frontity";

import { Container } from "./styles";

const AppButton = ({ children, icon, filled }) => {
  return (
    <Container filled={filled}>
      {children}
      {icon && <img src={icon} alt="ícone do botão" />}
    </Container>
  );
};

export default connect(AppButton);
