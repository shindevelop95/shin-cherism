import React from 'react'
import {Container, Inner, Frame, Image, Header, Logo, Text, Input, Button} from './styles'
import {Grid} from '@material-ui/core'
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
            <Logo src="../images/logo.png" alt="logo" />
            <Frame>
                <Header>Blog</Header>'
                <Inner>
                    <Text>We write about plant care, workshops, special event. Sign up for our newsletter</Text>
                    <Input placeholder="Enter your email"/>
                    <Button>Sign Up</Button>
                </Inner>
                <Grid container direction="row" spacing={1} className={classes.root}>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b1.jpg" alt="b"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b2.jpg" alt="b"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b3.jpg" alt="b"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b4.jpg" alt="b"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b5.jpg" alt="b"/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4} spacing={3}>
                        <Image src="../images/blog/b6.jpg" alt="b"/>
                    </Grid>
                </Grid>
            </Frame>
        </Container>
    )
}

export default BlogLanding
