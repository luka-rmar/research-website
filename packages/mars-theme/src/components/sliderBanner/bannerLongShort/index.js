import AppButton from "../../appButton";

import { Container, BoxContext, BoxContentButtom } from "./styles";

const BannerLongShort = () => {
  return (
    <Container>
      {/* <img src={swingTrade} alt="swing trade" /> */}
      <BoxContext>
        <h1>Par de ativos</h1>
        <h1>com risco reduzido</h1>

        <span>
          Operações não-direcionais que envolvem a venda de um ativo combinado
          com a compra de outro, baseada em análise estatística.
        </span>
        <BoxContentButtom>
          <AppButton filled>SAIBA MAIS</AppButton>
        </BoxContentButtom>
      </BoxContext>
    </Container>
  );
};

export default BannerLongShort;
