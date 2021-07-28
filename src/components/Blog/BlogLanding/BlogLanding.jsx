import React from 'react'

import {Container, Inner, Frame, Image, Logo, Text, Input, Button} from './styles'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const galleryData = []
for(var i = 1; i <= 6; i++){
        galleryData.push({id:i,image:`../images/blog/b${i}.jpg`});
}
const useStyles = makeStyles((theme) => ({
    root:{
        margin:'120px 0',
    }
}))
function BlogLanding() {
    const classes = useStyles();
    return (
        <Container>
            <Logo src="../images/logo.png" alt="logo" />
            <Frame>
                <header>Blog</header>
                <Inner>
                    <Text>We write about plant care, workshops, special event. Sign up for our newsletter</Text>
                    <Input placeholder="Enter your email"/>
                    <Button>Sign Up</Button>
                </Inner>
                <Grid container direction="row" spacing={1} className={classes.root}>
                    {galleryData.map((item) => (
                        <Grid key={item.id} item xs={12} md={6} lg={4} spacing={3}>
                            <Image src={item.image}/>
                        </Grid>
                    ))}
                </Grid>
            </Frame>
        </Container>
    )
}

export default BlogLanding
