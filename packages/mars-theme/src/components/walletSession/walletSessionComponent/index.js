import AppInput from "../../appInput";
import AppButton from "../../appButton";

import illustrationESectionWallet from "../../../static/images/illustrations/illustration_E_section_wallet.svg";

import {
  Container,
  BoxContext,
  BoxContentWallet,
  BoxContentWalletHeader,
  BoxContentWalletBody,
  BoxContentWalletFooter,
} from "./styles";

const walletSession = () => {
  return (
    <Container>
      <div className="image_container">
        <img src={illustrationESectionWallet} alt="Ilustração" />
      </div>
      <BoxContext>
        <BoxContentWallet>
          <BoxContentWalletHeader>
            <h3>
              Carteira <strong>Mensal</strong>
            </h3>
            <span>O TOP 10 das ações para ganhar a longo prazo</span>
          </BoxContentWalletHeader>
          <svg>
            <line x1="0" y1="0" x2="80" y2="0" />
          </svg>
          <BoxContentWalletBody>
            Uma seleção com 10 ações de{" "}
            <strong>
              {" "}
              empresas sólidas e boas perspectivas de crescimento.{" "}
            </strong>
            A análise é feita a partir de uma apuração estratégica com foco no
            médio-longo prazo, podendo ser modificada ao fim do mês.
          </BoxContentWalletBody>
          <BoxContentWalletFooter>
            <AppInput />
            <AppButton>BAIXAR</AppButton>
          </BoxContentWalletFooter>
        </BoxContentWallet>

        <BoxContentWallet>
          <BoxContentWalletHeader>
            <h3>
              Carteira <strong>Semanal</strong>
            </h3>
            <span>
              Cinco estrelas do mercado financeiro para quem quer agilidade
            </span>
          </BoxContentWalletHeader>
          <svg>
            <line x1="0" y1="0" x2="80" y2="0" />
          </svg>
          <BoxContentWalletBody>
            Uma carteira tática para capturar <strong> ganhos rápidos.</strong>{" "}
            posicionando-se nas 5 ações que prometem ser as estrelas da semana.
            Pode ser modificada ao fim da semana.
          </BoxContentWalletBody>
          <BoxContentWalletFooter>
            <AppInput />
            <AppButton>BAIXAR</AppButton>
          </BoxContentWalletFooter>
        </BoxContentWallet>
      </BoxContext>
    </Container>
  );
};

export default walletSession;
