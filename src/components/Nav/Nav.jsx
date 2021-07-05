import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Container, Wrapper, TextGroup, Group, Button, Text, Input } from './styles'

function Nav() {
    return (
        <Container>
            <Wrapper>
                <Group>
                    <Button>
                        <FacebookIcon />
                    </Button>
                    <Button>
                        <TwitterIcon />
                    </Button>
                    <Button>
                        <InstagramIcon />
                    </Button>
                </Group>
                <TextGroup>
                    <Text>Shop</Text>
                    <Text>Bestseller</Text>
                    <Text>Blog</Text>
                    <Text>Contact</Text>
                    <Text>About Us</Text>
                </TextGroup>
                <Group>
                    <Button>
                        <Text>Register</Text>
                    </Button>
                    <Button>
                        <SearchIcon />
                    </Button>
                    <Button>
                        <ShoppingCartIcon />
                    </Button>
                </Group>
            </Wrapper>
        </Container>
    )
}

export default Nav
