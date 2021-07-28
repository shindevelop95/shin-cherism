import React from 'react'
import '../../utils/styles.css'
import '../../utils/main'
import {landingDataTwo} from '../../fixtures/landingData'
import {NewContainer,Wrapper,Image, ItemImage,Frame, Title, Text, Item, SlideShow} from './styles'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';

function Slides() {
    return (
        <NewContainer>
            <Wrapper>
            <SlideShow data-aos="fade-right" className="slideshow">
                {landingDataTwo.map((item) => (
                    <div key={item.id}>
                        <Image src={item.url}/>
                    </div>
                ))}
            </SlideShow>
            <Frame>
                <Item data-aos="fade-down">
                    <Title>New Arrivals</Title>
                    <Text>A one stop shop for all indoor gardening essentials</Text>
                </Item>
                <Item data-aos="fade-down">
                    <ItemImage src="../images/slides/s5.jpg"/>
                </Item>
                <Item data-aos="fade-up">
                    <ItemImage src="../images/slides/s4.jpg"/>
                </Item>
                <Item data-aos="fade-up">
                    <TrendingFlatIcon/>
                </Item>
            </Frame>
            </Wrapper>
        </NewContainer>
    )
}

export default Slides
