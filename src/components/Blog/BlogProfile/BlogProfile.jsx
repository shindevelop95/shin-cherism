import React from 'react'
import {Container, Frame, Inner, Group,Image, Button, Title, Text} from './styles'
function BlogProfile() {
    return (
        <Container>
            <Frame>
                <Image src="../images/blog/banner.jpg"/>
            
            <Inner>
                <Group>
                    <Button>View Profile</Button>
                    <Title>Winter  Plant Care 101 Workshop At Cherrism Flower Shopping Store</Title>
                </Group>
                <Group>
                    <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                </Group>
            </Inner>
            <Inner>
                <Group>
                    <Image width="100%" src="../images/blog/v1.jpg"/>
                    <Button display="block">View Profile</Button>
                    <Title>Choose Plants Based On Light</Title>
                    <Text width="690px">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                </Group>
                <Group>
                    <Image width="100%" src="../images/blog/v2.jpg"/>
                    <Button display="block" >View Profile</Button>
                    <Title>Choose Plants Based On Light</Title>
                    <Text width="690px">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                </Group>
                
            </Inner>
            </Frame>
        </Container>
    )
}

export default BlogProfile
