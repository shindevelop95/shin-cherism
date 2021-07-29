import React, {useState, useEffect} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton,Badge} from '@material-ui/core';
import {Link, useLocation} from 'react-router-dom'
import { Container, Wrapper, TextGroup, TextGroupInner, Group, Button, Text, Input, ButtonToggle } from './styles'

function Nav({totalItems}) {
    const [search, setSearch] = useState(false);
    const [display, setDisplay] = useState(false);
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 10){
                setDisplay(true);
            }else
                setDisplay(false);
             });

            return() => {
                window.removeEventListener("scroll", null);
            }
        },[])
    
    const handleMenu = (e) =>{
        e.preventDefault();
        
    } 
    return (
        <Container display={display}>
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
                       <Link style={{textDecoration:'none', color:'#eee'}} to="/blog" >
                         <Text>Blog</Text>
                       </Link>
                        <Text>Contact</Text>
                        <Text>About Us</Text>
                    </TextGroupInner>):(<TextGroupInner>
                        <Text>Shop</Text>
                        <Text>Bestseller</Text>
                        <Link style={{textDecoration:'none',color:'#eee'}} to="/blog" >
                         <Text>Blog</Text>
                       </Link>
                        <Text>Contact</Text>
                        <Text>About Us</Text>
                    </TextGroupInner>)}
                </TextGroup>
                <Group>
                    <Input placeholder="Search Here" search={search}/>
                    <Button onClick={()=> setSearch(!search)}>
                        <SearchIcon />
                    </Button>
                   
                    {location.pathname !== '/cart' && (
                        <Link to="/cart">
                            <Button>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </Button>
                        </Link>
                    )}
                   
                </Group>
            </Wrapper>
                 <ButtonToggle>  
                    {active? <ClearIcon onClick={() => setActive(active => !active)}/>:<MenuIcon onClick={() => setActive(active => !active)}/>}
                </ButtonToggle> 
        </Container>
    )
}

export default Nav;
