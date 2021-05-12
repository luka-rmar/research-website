import analistasBanner from "../../../static/images/illustrations/analistas-banner-1.svg";
import backgroundWave from "../../../static/images/illustrations/background-wave.svg";

import { Container, BoxImage, BoxImageBackgroudWave } from "./styles";

const BannerAnalysts = () => {
  return (
    <Container>
      <BoxImageBackgroudWave>
        <img src={backgroundWave} alt="Onda" />
      </BoxImageBackgroudWave>
      <BoxImage>
        <img src={analistasBanner} alt="Analistas" />
      </BoxImage>
    </Container>
  );
};

export default BannerAnalysts;
