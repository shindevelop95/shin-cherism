import React from 'react'
import {Container, Frame, Wrapper,Image, Title} from './styles'
function Recommend() {
    return (
        <Container>
            <Title data-aos="zoom-out">You may like these</Title>
            <Frame>
                <Wrapper >
                    <Image src="../../images/Recommend/r1.jpg"/>
                </Wrapper>
                <Wrapper>
                    <Image src="../../images/Recommend/r2.jpg"/>
                </Wrapper>
                <Wrapper >
                    <Image src="../../images/Recommend/r3.jpg"/>
                </Wrapper>
            </Frame>
        </Container>
    )
}

export default Recommend
