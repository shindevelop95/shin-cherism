import React from 'react'
import { makeStyles,IconButton,Button, Card, Avatar, CardActions,CardContent, CardHeader, CardMedia, Typography } from '@material-ui/core'
import {Container, Title, SubTitle, InstaInput, Text, Wrapper, Group, LeftGroup, RightGroup, Image} from './styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PublishIcon from '@material-ui/icons/Publish';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth:645,
    },

    button:{
        padding:'10px 40px',
        fontSize:'15px',
    },
    wrapper:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
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
                <Title data-aos="fade-right">Looking for some 'Cherisome' inspiration? Here are some blog about our house plants</Title>
                <SubTitle data-aos="fade-left" textAlign="center">Blog, ShinWang, Inspiration, Plants</SubTitle>
               <Group>
                <LeftGroup>
                <Text data-aos="fade-right">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                    <hr/>
                    <SubTitle data-aos="fade-right">Cherismifesta</SubTitle>
                    <Text data-aos="fade-right"><span>Cherismifesta</span> are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
                    <Card data-aos="fade-right" className={classes.root}>
                    <CardContent className={classes.wrapper}>
                    <CardHeader avatar={
                            <Avatar aria-label="recipe">
                                R
                            </Avatar>
                        }
                        title="cherismfestigram"
                        subheader="17 follower"/>
                        <Button xs={0} size="small" className={classes.button}  variant="contained" color="primary" disableElevation>View Profile</Button>
                    </CardContent>
                        <CardMedia className={classes.media} image="../images/blog/b1.jpg" title="profile"/>
                        <CardActions disableSpacing>
                            <Button  color="primary">
                                View More on Instagram
                            </Button>
                        </CardActions>
                        <hr/>
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
                        <hr/>
                    <InstaInput placeholder="Add a comment..."/>
                    </Card>
                </LeftGroup>
                <RightGroup>
                    <Image data-aos="fade-left" src="../images/blog/b2.jpg" alt="img"/>
                    <Text data-aos="fade-left">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </Text>
                    <hr/>
                    <Text data-aos="fade-left" fontWeight="bold">Follow us</Text>
                    <FacebookIcon data-aos="fade-left" color="primary"/>
                    <InstagramIcon data-aos="fade-left" color="secondary"/>
                    <hr/>
                </RightGroup>
               </Group>
            </Wrapper>
        </Container>
    )
}

export default BlogPost
