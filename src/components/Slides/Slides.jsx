import React from "react";
import "../../utils/styles.css";
import "../../utils/main";
import { landingDataTwo } from "../../fixtures/landingData";
import {
  NewContainer,
  Wrapper,
  Image,
  ImageFrame,
  ItemImage,
  Frame,
  Title,
  Text,
  Item,
  TextGroup,
  SlideShow,
} from "./styles";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";

function Slides() {
  return (
    <NewContainer>
      <Wrapper>
        <SlideShow className="slideshow">
          {landingDataTwo.map((item) => (
            <ImageFrame key={item.id}>
              <Image src={item.url} />
            </ImageFrame>
          ))}
        </SlideShow>
        <Frame>
          <Item>
            <TextGroup>
              <Title>New Arrivals</Title>
              <Text>A one stop shop for all indoor gardening essentials</Text>
            </TextGroup>
          </Item>
          <Item>
            <ItemImage src="../images/slides/s5.jpg" />
          </Item>
          <Item>
            <ItemImage src="../images/slides/s4.jpg" />
          </Item>
          <Item>
            <TrendingFlatIcon />
          </Item>
        </Frame>
      </Wrapper>
    </NewContainer>
  );
}

export default Slides;
