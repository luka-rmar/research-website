import { connect } from "frontity";

// import Link from "../../link";
// import Nav from "../../nav";
// import MobileMenu from "../../menu";
import AppButton from "../../appButton";

import logoHeader from "../../../static/images/logo/logo_header_beacapital.svg";
import iconTelegram from "../../../static/images/logo/icon_telegram.svg";
// import imageMockDataFinanceGlobal from "../../../mock/image/tarja_operation_finance.png";

import {
  Container,
  HeaderContainer,
  BoxContent,
  BoxContentImage,
  BoxContentNav,
  BoxContentButtom,
  BoxExposeDataOparion,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <BoxContent>
          <BoxContentImage>
            <img src={logoHeader} alt="logo becapital" />
          </BoxContentImage>
          <BoxContentNav>
            <a href="#">QUEM SOMOS</a>
            <a href="#">PAPO DE INVESTIDOR</a>
          </BoxContentNav>
          <BoxContentButtom>
            <AppButton icon={iconTelegram} filled>
              TELEGRAM
            </AppButton>
          </BoxContentButtom>
        </BoxContent>
        {/* <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description> */}
        {/* <MobileMenu /> */}
      </HeaderContainer>
      <BoxExposeDataOparion>
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget" />
          <div className="tradingview-widget-copyright">
            <a
              href="https://br.tradingview.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="blue-text">Tape de Cotações</span>
            </a>{" "}
            por TradingView
          </div>
        </div>
        {/* <img src={imageMockDataFinanceGlobal} alt="dados de oprações" /> */}
      </BoxExposeDataOparion>
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
