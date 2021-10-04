import React from "react";
import {
  Container,
  ItemLeft,
  ItemLeftInner,
  ItemRight,
  Slider,
  Wrapper,
  Header,
  Button,
  Banner,
  ImageBanner,
  BannerWrap,
  Image,
} from "./styles";
import SimpleImageSlider from "react-simple-image-slider";
import { landingData } from "../../fixtures/landingData";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Container>
      <Wrapper>
        <ItemLeft>
          <ItemLeftInner>
          <Header>Potted plants delivered to your door</Header>
          <Link style={{ textDecoration: "none" }} to="/product">
            <Button>
              Shop Now <TrendingFlatIcon />
            </Button>
          </Link>
          </ItemLeftInner>
        </ItemLeft>
        <ItemRight>
          <Slider>
            <SimpleImageSlider
              style={{ border: "none" }}
              width={800}
              height={560}
              images={landingData}
              showBullets={true}
              slideDuration={0.5}
              showNavs
            />
          </Slider>
        </ItemRight>
      </Wrapper>
      <Banner>
        {landingData.map((item) => (
          <BannerWrap key={item.id}>
            <Image src={item.url} />
            <ImageBanner>
              <span>{item.name}</span>
            </ImageBanner>
          </BannerWrap>
        ))}
      </Banner>
    </Container>
  );
}

export default Landing;
