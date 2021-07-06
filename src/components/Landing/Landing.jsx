import React from 'react'
import { Container, ItemLeft, ItemRight, Logo, Slider, Wrapper, Header, Button, Banner, ImageBanner, BannerWrap, Image } from './styles'
import SimpleImageSlider from "react-simple-image-slider";
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

const images = [
    { url: "../images/landing/landing1.jpg" },
    { url: "../images/landing/landbanner2.jpg" },
    { url: "../images/landing/landbanner3.jpg" },
]
function Landing() {
    return (
        <Container>
            <Logo src="../images/logo.png" alt="logo" />
            <Wrapper>
                <ItemLeft>
                    <Header>Potted plants delivered to your door</Header>
                    <Button>Shop Now <TrendingFlatIcon /></Button>
                </ItemLeft>
                <ItemRight>
                    <Slider>
                        <SimpleImageSlider
                            style={{ border: "none" }}
                            width={1230}
                            height={720}
                            images={images}
                            showBullets={true}
                            slideDuration={0.5}
                            showNavs
                        />
                    </Slider>
                </ItemRight>
            </Wrapper>
            <Banner>
                <BannerWrap>
                    <Image src={"../images/landing/landbanner.jpg"} />
                    <ImageBanner><span>Home</span></ImageBanner>
                </BannerWrap>
                <BannerWrap>
                    <Image src={"../images/landing/landbanner2.jpg"} />
                    <ImageBanner><span>Office</span></ImageBanner>
                </BannerWrap>
                <BannerWrap>
                    <Image src={"../images/landing/landbanner3.jpg"} />
                    <ImageBanner><span>Garden</span></ImageBanner>
                </BannerWrap>
            </Banner>
        </Container>
    )
}

export default Landing
