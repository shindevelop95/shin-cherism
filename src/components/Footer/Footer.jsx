import React from 'react'
import {Container, Wrapper, Title, SubTitle, Text, SubText, Group, SocialGroup, Frame, LetterGroup, LetterTitle, LetterFrame, CopyGroup} from './styles'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Copyright } from '@material-ui/icons';

function Footer() {
    return (
        <Container>
            <Group>
                <SubTitle>Follow us</SubTitle>
                <SocialGroup>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </SocialGroup>
            </Group>
            <Frame>
                <Group>
                    <Text>Shop</Text>
                    <Text>Bestsellers</Text>
                    <Text>Blog</Text>
                    <Text>Contact</Text>
                    <Text>About Us</Text>
                </Group>
                <LetterGroup>
                    <Title>Subscribe to NewsLetter</Title>
                    <Text marginbottom="50px" marginleft="10%" color="black">Stay in the loop and keep up to date with our latest releases, updates and offers</Text>
                    <LetterFrame>
                        <LetterTitle>Enter your email here</LetterTitle>
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
