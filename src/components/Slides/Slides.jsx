import React from 'react'
import '../../utils/styles.css'
import '../../utils/main'
import {NewContainer,Wrapper,Image, ItemImage,Frame, Title, Text, Button, Item,Slide, SlideShow} from './styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

function Slides() {
    return (
        <NewContainer>
            <Wrapper>
            <SlideShow className="slideshow">
                <div>
                    <Image src="../images/slides/s1.jpg"/>
                </div>
                <div>
                    <Image src="../images/slides/s2.jpg"/>
                </div>
                <div>
                    <Image src="../images/slides/s3.jpg"/>
                </div>
            </SlideShow>
            <Frame>
                <Item>
                    <Title>New Arrivals</Title>
                    <Text>A one stop shop for all indoor gardening essentials</Text>
                </Item>
                <Item>
                    <ItemImage src="../images/slides/s1.jpg"/>
                </Item>
                <Item>
                    <ItemImage src="../images/slides/s1.jpg"/>
                </Item>
                <Item>
                    <TrendingFlatIcon/>
                </Item>
            </Frame>
            </Wrapper>
        </NewContainer>
    )
}

export default Slides
