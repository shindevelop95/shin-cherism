import React from 'react'
import { Typography} from '@material-ui/core';
import {Container, Frame,Title, Text,SubTitle,Wrapper,Image,TextFrame, Logo, Header, Button, PriceGroup, PriceWrapper,CartButton, ButtonGroup} from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log("In cart",cart);

    const EmptyCart = () => (
        <>
        <Image src="../images/cart/cart1.png" alt="shopping cart"/>
        <SubTitle>You have no items in your shopping cart</SubTitle>
            <Link style={{textDecoration:'none'}} to="/"><Button>Start adding some</Button></Link>
        
        </>
    )

    const FilledCart = () => (
        <>
            <Container>
            <Link to="/">
            <Logo src="../images/logo.png" alt="logo" />
            </Link>
                <Wrapper>
                    <Header>Shopping Basket</Header>
                    <TextFrame>
                        <Title>Product</Title>
                        <Title>Description</Title>
                        <Title>Quantity</Title>
                        <Title>Amount</Title>
                    
                    </TextFrame>
                    {cart.line_items.map((item) => (
                        <Frame key={item.id}>
                            <CartItem  item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                        </Frame>
                    ))}
                    <PriceWrapper>
                    <PriceGroup>
                        <Text>Subtotal</Text>
                        <Text>{cart.subtotal.formatted_with_symbol}</Text>
                    </PriceGroup>
                    <Text>$0.00</Text>
                    <PriceGroup>
                        <Text>Total</Text>
                        <Text>{cart.subtotal.formatted_with_symbol}</Text>
                    </PriceGroup>
                </PriceWrapper>
                <ButtonGroup>
                    <CartButton onClick={handleEmptyCart}>Empty Cart</CartButton>
                    <Link to="/checkout">
                        <CartButton >Proceed</CartButton>
                    </Link>
                </ButtonGroup>
                </Wrapper>
                <Footer/>
               
            </Container>
        </>
    )

    if(!cart.line_items) return 'Loading...';
    return (
        <div>
            {!cart?.line_items?.length? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
