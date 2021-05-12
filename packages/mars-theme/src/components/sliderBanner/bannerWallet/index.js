import AppButton from "../../appButton";

import iconTelegram from "../../../static/images/logo/icon_telegram.svg";

import { Container, BoxContext, BoxContentButtom } from "./styles";

const BannerWallet = () => {
  return (
    <Container>
      {/* <img src={swingTrade} alt="swing trade" /> */}
      <BoxContext>
        <h1>Carteira do</h1>
        <h1>Estrategista</h1>

        <span>Quando a estratégia encontra a tática</span>
        <span>Fee to be: receba relatórios gratuitos.</span>

        <BoxContentButtom>
          <AppButton icon={iconTelegram} filled>
            TELEGRAM
          </AppButton>
        </BoxContentButtom>
      </BoxContext>
    </Container>
  );
};

export default BannerWallet;
