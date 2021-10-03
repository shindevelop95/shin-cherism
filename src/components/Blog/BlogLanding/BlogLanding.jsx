import React from 'react'
import {Container, Inner, Frame, Image,Text, Input,Grid} from './styles'
import {Button} from '../styles'
import {galleryData} from "../../../fixtures/landingData"
import {makeStyles} from '@material-ui/core/styles';

function BlogLanding() {
    return (
        <Container>
            <Frame>
                <header data-aos="fade-right">Blog</header>
                <Inner data-aos="fade-left">
                    <Text>We write about plant care, workshops, special event. Sign up for our newsletter</Text>
                    <Input type="text" placeholder="Enter your email"/>
                    <Button>Sign Up</Button>
                </Inner>
                <Grid container direction="row">
                    {galleryData.map((item) => (
                        <div key={item.id}>
                            <Image data-aos={item.animate} src={item.image}/>
                        </div>
                    ))}
                </Grid>
            </Frame>
        </Container>
    )
}

export default BlogLanding
