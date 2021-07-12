import React from 'react'
import {Container, Frame, Group, Title, Text, LeftGroup, RightGroup, OuterGroup,Image, Button} from './styles';
import VideoPlayer from "react-video-js-player";

function About() {
    const poster = "../images/slides/poster.png";
    return (
        <>
            <Container>
                <Frame>
                    <Group>
                        <VideoPlayer className="video" src="../videos/red.mp4" poster={poster} width="830" height="580"/>
                    </Group>
                    <Group>
                        <Title>About Us</Title>
                        <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
                        <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
                    </Group>
                </Frame>
            </Container>
            <OuterGroup>
                <LeftGroup>
                <Image height="900px" width="700px" src="../images/landing/land-v.jpg"/>
                    <Title>Get your hands dirty</Title>
                    <Text width="700px">psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
                    <Button>Read More </Button>
                </LeftGroup>
                <RightGroup>
                    <img className="abs" src="../images/landing/land-abs.png"/>
                    <Title>Plant care workshop</Title>
                    <Text width="700px">psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
                    <Image height="600px" width="900px"  src="../images/landing/land-l.jpg"/>
                </RightGroup>
            </OuterGroup>
        </>
    )
}

export default About
