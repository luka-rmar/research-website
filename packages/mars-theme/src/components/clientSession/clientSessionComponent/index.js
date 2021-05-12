import {
  Container,
  BoxContent,
  Titlle,
  BoxContext,
  BoxImage,
  BoxContentTexts,
} from "./styles";

const clientSession = () => {
  return (
    <Container>
      <BoxContent>
        <Titlle>ELES FALAM POR NÓS</Titlle>
        <svg>
          <line x1="100" y1="0" x2="200" y2="0" />
        </svg>
        <BoxContext>
          <BoxImage>
            <img
              src="https://medias.cnnbrasil.com.br/o-ceo-da-tesla-e-da-spacex-elon-musk.jpeg?format=JPEG&image=https://mediastorage.cnnbrasil.com.br/IMAGES/00/00/01/19990_309062D72EFFC69D.jpg&width=804&height=536&resize=CROP"
              alt="Elon Musk"
            />
          </BoxImage>
          <BoxContentTexts>
            <span>Elon Musk</span>
            <p>
              O Elon é um dos melhores analistas de investimentos que conheço.
              Suas teses de investimento sempre são muito bem fundamentadas e
              com uma visão macro privilegiada, o que possibilita uma alta
              performance no mercado. Sou fã e o sigo para não perder suas
              análises, que são muito importantes no meu processo decisório de
              investimentos
            </p>
          </BoxContentTexts>
        </BoxContext>
      </BoxContent>
    </Container>
  );
};

export default clientSession;
