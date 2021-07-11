import React, {useState} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Wrapper, TextGroup, TextGroupInner, Group, Button, Text, Input } from './styles'

function Nav() {

    const [active, setActive] = useState(false);
    
    const handleMenu = (e) =>{
        e.preventDefault();
        
    } 
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
                   
                   { active? (<TextGroupInner className="active">
                        <Text>Shop</Text>
                        <Text>Bestseller</Text>
                        <Text>Blog</Text>
                        <Text>Contact</Text>
                        <Text>About Us</Text>
                    </TextGroupInner>):(<TextGroupInner>
                        <Text>Shop</Text>
                        <Text>Bestseller</Text>
                        <Text>Blog</Text>
                        <Text>Contact</Text>
                        <Text>About Us</Text>
                    </TextGroupInner>)}
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
            <span>
                {active? <ClearIcon onClick={() => setActive(active => !active)}/>:<MenuIcon onClick={() => setActive(active => !active)}/>}
            </span>
        </Container>
    )
}

export default Nav
