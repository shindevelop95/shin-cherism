import React from 'react'
import {Container, Frame, Inner,InnerGroup, InnerTitle, InnerText,Group,GroupItem,Image,Title, Text} from './styles'
import {Button} from '../styles'
function BlogProfile() {
    return (
        <Container>
            <Frame>
                <Image data-aos="zoom-in" src="../images/blog/banner.jpg"/>
            <Inner>
                <Button>View Profile</Button>
                <InnerGroup data-aos="fade-right">
                    <InnerTitle>Winter Plant Care 101 Workshop At Cherrism Flower Shopping Store</InnerTitle>
                    <InnerText data-aos="fade-left">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</InnerText>
                </InnerGroup>
            </Inner>
            <Inner>
                <Group>
                    <Image src="../images/blog/v1.jpg"/>
                    <GroupItem >
                        <Button>View Profile</Button>
                        <Title>Choose Plants Based On Light</Title>
                        <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                    </GroupItem>
                </Group>
                <Group>
                    <Image src="../images/blog/v2.jpg"/>
                     <GroupItem>
                        <Button>View Profile</Button>
                        <Title>Choose Plants Based On Light</Title>
                        <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                    </GroupItem>
                </Group>
            </Inner>
            </Frame>
        </Container>
    )
}

export default BlogProfile
