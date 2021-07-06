import React from 'react'
import {Container, Frame, Group, Title, Text} from './styles';
import VideoPlayer from "react-video-js-player";

function About() {
    const poster = "../images/slides/poster.png";
    return (
        <Container>
            <Frame>
            <Group>
                <VideoPlayer src="../videos/red.mp4" poster={poster} width="830" height="580"/>
            </Group>
            <Group>
                <Title>About Us</Title>
                <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
                <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</Text>
            </Group>
            </Frame>
        </Container>
    )
}

export default About
