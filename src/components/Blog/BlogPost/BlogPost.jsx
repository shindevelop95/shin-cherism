import React from 'react'
import { makeStyles,IconButton,Button, Card, Avatar, CardActions,CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import {Container, Title, SubTitle, Text, Wrapper, Frame, Group, LeftGroup, RightGroup, Image, InstaFrame, InstaFrameInner, InstaText, InstaButton} from './styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PublishIcon from '@material-ui/icons/Publish';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth:645,
    },

    button:{
        padding:'0 40px',
    },
    wrapper:{
        display: 'flex',
        justifyContent:'space-between',
    },
    media:{
        height:0,
        paddingTop:'76.25%',
    },
    text:{
        color:'#5a94f9',
    }
}))
function BlogPost() {
    const classes = useStyles();

    return (
        <Container>
            <Wrapper>
                <Title>Looking for some 'Cherisome' inspiration? Here are some blog about our house plants</Title>
                <SubTitle>Blog, ShinWang, Inspiration, Plants</SubTitle>
               <Group>
               <LeftGroup>
               <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                <hr/>
                <SubTitle>Cherismifesta</SubTitle>
                <Text>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                <Card className={classes.root}>
                   <CardContent className={classes.wrapper}>
                   <CardHeader avatar={
                        <Avatar aria-label="recipe">
                            R
                        </Avatar>
                    }
                    title="cherismfestigram"
                    subheader="17 follower"/>
                    <Button size="small" className={classes.button} variant="contained" color="primary" disableElevation>View Profile</Button>
                   </CardContent>
                    <CardMedia className={classes.media} image="../images/blog/b1.jpg" title="profile"/>
                    <CardActions disableSpacing>
                        <Button  color="primary">
                            View More on Instagram
                        </Button>
                    </CardActions>
                   <CardActions disableSpacing>
                   <IconButton size="small">
                            <FavoriteBorderIcon/>
                        </IconButton>
                        <IconButton size="small">
                            <ChatBubbleOutlineIcon/>
                        </IconButton>
                        <IconButton size="small">
                            <PublishIcon/>
                        </IconButton>
                   </CardActions>
                    <CardContent>
                        <Typography variant="body" color="textPrimary">
                           7 likes
                        </Typography>
                        <Typography variant="body" color="textPrimary" component="p">
                          cherismfestigram
                        </Typography>
                    </CardContent>
                </Card>
               </LeftGroup>
               </Group>
            </Wrapper>
        </Container>
    )
}

export default BlogPost
