import React from 'react'
import {Container, Wrapper, Frame, Title, Text, Group, Image, GalleryContainer, GalleryFrame,GalleryGroup, GalleryImage, GalleryWrapper} from './styles'
import OwlCarousel from 'react-owl-carousel';  
import '../../utils/owl.css'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
function Feature() {
    return (
        <>
            <Container>
            <Wrapper>
                <Title>Feature Products</Title>
                <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <Frame>
                    <Group>
                        <Image src="../images/landing/feature1.png"/>
                    </Group>
                    <Group>
                        <Image bottom="-50px" src="../images/landing/feature2.png"/>
                    </Group>
                    <Group>
                        <Image bottom="-280px" src="../images/landing/feature3.png"/>
                    </Group>
                </Frame>
            </Wrapper>
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
               
                   <GalleryGroup>
                        <GalleryImage src="../images/gallery/gallery1.jpg"/>
                    </GalleryGroup>
                   <GalleryGroup>
                        <GalleryImage src="../images/gallery/gallery2.jpg"/>
                    </GalleryGroup>
                   <GalleryGroup>
                        <GalleryImage src="../images/gallery/gallery3.jpg"/>
                    </GalleryGroup>
                
                </OwlCarousel>
            </GalleryFrame>
            </GalleryWrapper>
        </GalleryContainer>
        </>
    )
}

export default Feature
