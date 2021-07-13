import React from 'react'
import { Typography} from '@material-ui/core';
import {Container, Frame,Title,Wrapper, TextFrame, Logo, Header} from './styles'
import CartItem from './CartItem/CartItem'
const Cart = ({cart}) => {
    console.log("In cart",cart);

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some</Typography>
    )

    const FilledCart = () => (
        <>
            <Container>
            <Logo src="../images/logo.png" alt="logo" />
                <Wrapper>
                    <Header>Shopping Basket</Header>
                    <TextFrame>
                        <Title>Product</Title>
                        <Title>Description</Title>
                        <Title>Quantity</Title>
                        <Title>Amount</Title>
                    
                    </TextFrame>
                    {cart.line_items.map((item) => (
                        <Frame>
                            <CartItem item={item}/>
                        </Frame>
                    ))}
                </Wrapper>
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
