import React, {useState, useEffect} from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
import {Badge} from '@material-ui/core';
import {useLocation} from 'react-router-dom'
import { Container, NavLink, Wrapper, TextGroup, TextGroupInner, Group, Button, Text, Input, ButtonToggle } from './styles'

function Nav({totalItems}) {
    const [search, setSearch] = useState(false);
    const [display, setDisplay] = useState(false);
    const [active, setActive] = useState(false);
    const location = useLocation();
    const locale = useLocation().pathname;


    function handleClick(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
    }

    console.log("Show me the pathname",locale);
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
    
        const scrollToBottom = () => {
            window.scrollTo({
                top:document.documentElement.scrollHeight,
                behavior:'smooth'
            });
        }

        const scrollToAbout = () => {
            window.scrollTo({
                top:document.documentElement.scrollHeight/3,
                behavior:'smooth'
            });
        }

    return (
        <Container display={display}>
            <Wrapper>
                <Group>
                    <Button>
                        <FacebookIcon/>
                        
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
                        <NavLink to="/product">
                            <Text>Shop</Text>
                        </NavLink>
                        <NavLink to="/product">
                        <Text>Bestseller</Text>
                        </NavLink>
                       <NavLink to="/blog" >
                         <Text>Blog</Text>
                       </NavLink>
                        <NavLink>
                            <Text onClick={scrollToBottom}>Contact</Text>
                        </NavLink>
                        {locale === '/' ? (
                        <Text onClick={scrollToAbout}>About Us</Text>):null}
                    </TextGroupInner>):
                        (<TextGroupInner>
                            <NavLink  to="/product">
                            <Text onClick={handleClick}>Shop</Text>
                            </NavLink>
                            <NavLink  to="/product">
                            <Text onClick={handleClick}>Bestseller</Text>
                            </NavLink>
                            <NavLink to="/blog" >
                            <Text onClick={handleClick}>Blog</Text>
                        </NavLink>
                            <Text onClick={scrollToBottom}>Contact</Text>
                            {locale === '/' ? (
                            <Text onClick={scrollToAbout}>About Us</Text>):null}
                        </TextGroupInner>)}
                </TextGroup>
                <Group>
                    <Input placeholder="Search Here" search={search}/>
                    <Button onClick={()=> setSearch(!search)}>
                        <SearchIcon />
                    </Button>
                   
                    {location.pathname !== '/cart' && (
                        <NavLink to="/cart">
                            <Button>
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartIcon onClick={handleClick}/>
                                </Badge>
                            </Button>
                        </NavLink>
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
