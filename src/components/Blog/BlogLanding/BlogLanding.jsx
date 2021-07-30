import React from 'react'
import {Container, Inner, Frame, Image,Text, Input} from './styles'
import {Button} from '../styles'
import {Grid} from '@material-ui/core'
import {galleryData} from "../../../fixtures/landingData"
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        margin:'120px 0',
    }
}))
function BlogLanding() {
    const classes = useStyles();
    return (
        <Container>
            <Frame>
                <header data-aos="fade-right">Blog</header>
                <Inner data-aos="fade-left">
                    <Text>We write about plant care, workshops, special event. Sign up for our newsletter</Text>
                    <Input type="text" placeholder="Enter your email"/>
                    <Button>Sign Up</Button>
                </Inner>
                <Grid container direction="row" spacing={1} className={classes.root}>
                    {galleryData.map((item) => (
                        <Grid key={item.id} item xs={12} md={6} lg={4} spacing={3}>
                            <Image data-aos={item.animate} src={item.image}/>
                        </Grid>
                    ))}
                </Grid>
            </Frame>
        </Container>
    )
}

export default BlogLanding
