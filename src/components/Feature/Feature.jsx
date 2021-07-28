import React from 'react'
import {Container, WrapperFirst, Frame, Title, Text, Group, Image, GalleryContainer, GalleryFrame,GalleryGroup, GalleryImage, GalleryWrapper} from './styles'
import OwlCarousel from 'react-owl-carousel'; 
import {landingDataThree, landingDataFour} from '../../fixtures/landingData' 
import '../../utils/owl.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
function Feature() {
    return (
        <>
            <Container>
            <WrapperFirst>
                <Title>Feature Products</Title>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Frame>
                    {landingDataThree.map((item) => (
                        <Group key={item.id}>
                            <Image src={item.url} bottom={item.bottom} data-aos={item.animate} data-aos-duration={item.duration}/>
                        </Group>
                    ))}
                </Frame>
                </WrapperFirst>
            </Container>
        <GalleryContainer>
            <GalleryWrapper>
            <Title align="center">Our plants in the wild</Title>
            <GalleryFrame>
            <OwlCarousel items={3}  
                className="owl-theme"  
                loop  
                nav
                margin={8}
                autoplay ={true} 
                >  
                    {landingDataFour.map((item) => (
                        <GalleryGroup key={item.id}>
                            <GalleryImage src={item.url}/>
                        </GalleryGroup>
                    ))}
                </OwlCarousel>
            </GalleryFrame>
            </GalleryWrapper>
        </GalleryContainer>
        </>
    )
}

export default Feature
