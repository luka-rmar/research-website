import { styled } from "frontity";
import { Carousel } from "react-bootstrap";

import BannerAnalysts from "../bannerAnalysts";
import BannerSwingTrade from "../bannerSwingTrade";
import BannerWallet from "../bannerWallet";
import BannerLongShort from "../bannerLongShort";

const SliderBannerFade = () => {
  return (
    <Container>
      <Carousel
        fade
        interval={1000}
        pause="hover"
        indicators={false}
        controls={false}
      >
        <Carousel.Item>
          <BannerLongShort />
        </Carousel.Item>
        <Carousel.Item>
          <BannerSwingTrade />
        </Carousel.Item>
        <Carousel.Item>
          <BannerWallet />
        </Carousel.Item>
        <Carousel.Item>
          <BannerAnalysts />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default SliderBannerFade;

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 140px);

  .carousel-item,
  .carousel,
  .carousel-inner {
    height: 100%;
  }
`;
