import AppButton from "../../appButton";

import iconTelegram from "../../../static/images/logo/icon_telegram.svg";

import { Container, BoxContext, BoxContentButtom } from "./styles";

const BannerSwingTrade = () => {
  return (
    <Container>
      {/* <img src={swingTrade} alt="swing trade" /> */}
      <BoxContext>
        <h1>Mais strike</h1>
        <h1>e menos stop</h1>

        <span>
          Operações rápidas e oportunistas com boa relação de risco-retorno,
          baseadas em uma análise técnica.
        </span>
        <BoxContentButtom>
          <AppButton icon={iconTelegram} filled>
            TELEGRAM
          </AppButton>
        </BoxContentButtom>
      </BoxContext>
    </Container>
  );
};

export default BannerSwingTrade;
