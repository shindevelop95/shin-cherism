import React from 'react'
import { Typography} from '@material-ui/core';
import {Container, Frame,Title,Wrapper,TextFrame, Logo, Header, Button} from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log("In cart",cart);

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart, 
            <Link to="/">Start adding some</Link>
        </Typography>
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
                        <Frame>
                            <CartItem key={item.id} item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                        </Frame>
                    ))}
                </Wrapper>
                <Button onClick={handleEmptyCart}>Empty Cart</Button>
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
