import React from 'react'
import {Container, Frame, Group, Title, Text, LeftGroup, RightGroup, WrapperSecond,Image, Button, WrapperFirst} from './styles';
import VideoPlayer from "react-video-js-player";

function About() {
    const poster = "../images/slides/poster.png";
    return (
            <Container>
                <WrapperFirst>
                    <Frame>
                        <Group>
                            <VideoPlayer className="video" src="../videos/red.mp4" poster={poster}  height="380"/>
                        </Group>
                        <Group >
                            <Title>About Us</Title>
                            <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
                            <Text> by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
                        </Group>
                    </Frame>
                </WrapperFirst>
                <WrapperSecond>
                    <LeftGroup>
                    <Image data-aos="fade-right" height="900px" width="700px" src="../images/landing/land-v.jpg" alt="img"/>
                        <Title data-aos="fade-down">Get your hands dirty</Title>
                        <Text data-aos="fade-down" width="700px">psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
                        <Button>Read More </Button>
                    </LeftGroup>
                    <RightGroup>
                        <img data-aos="fade-zoom-in" className="abs" src="../images/landing/land-abs.png" alt="img"/>
                        <Title data-aos="fade-down">Plant care workshop</Title>
                        <Text data-aos="fade-down" width="700px">psum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</Text>
                        <Image data-aos="fade-left" height="600px" width="900px"  src="../images/landing/land-l.jpg" alt="img"/>
                    </RightGroup>
                </WrapperSecond>
            </Container>
    )
}

export default About
