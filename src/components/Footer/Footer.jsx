import React from 'react'
import {Container, Wrapper, Title, SubTitle, LetterInput, Text, SubText, Group, SocialGroup, Frame, LetterGroup, LetterTitle, LetterFrame, CopyGroup} from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Copyright } from '@material-ui/icons';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {IconButton} from '@material-ui/core'

function Footer({id}) {

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }
    return (
        <Container>
            <Group>
                <SubTitle>Follow us</SubTitle>
                <SocialGroup>
                   <IconButton>
                        <FacebookIcon/>
                   </IconButton>
                   <IconButton>
                        <TwitterIcon/>
                   </IconButton>
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>
               
                </SocialGroup>
            </Group>
            <Frame  name="contact" id="contact">
                
                <Group>
                <span className="up">
                    <KeyboardArrowUpIcon onClick={scrollToTop} className="arrow"/>
                </span>
                    <Text>Shop</Text>
                    <Text>Bestsellers</Text>
                    <Text>Blog</Text>
                    <Text>Contact</Text>
                    <Text>About Us</Text>
                </Group>
                <LetterGroup>
                
                    <Title>Subscribe to NewsLetter</Title>
                    <Text marginbottom="27px" marginleft="10%" color="black">Stay in the loop and keep up to date with our latest releases, updates and offers</Text>
                    <LetterFrame>
                        <LetterInput type="search" autocomplete="off" autofill="false" placeholder="Enter your email here"/>
                    </LetterFrame>
                    <LetterFrame>
                        <LetterTitle>SUBSCRIBE</LetterTitle>
                    </LetterFrame>
                    <CopyGroup>
                    <CopyrightIcon/> <span>All Rights Reserved, Developed by Shin W, 2021</span>
                    </CopyGroup>
                </LetterGroup>
                
            </Frame>
            
        </Container>
    )
}

export default Footer
