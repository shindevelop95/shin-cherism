import React from 'react'
import {Container,Button, Frame,Title, Text,SubTitle,Wrapper,Image,TextFrame,PriceGroup, PriceWrapper,CartButton, ButtonGroup} from './styles'
import CartItem from './CartItem/CartItem'
import {Link} from 'react-router-dom'

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
    console.log("In cart",cart);

    const EmptyCart = () => (
        <Container data-aos="zoom-in">
            <Image src="../images/cart/cart1.png" alt="shopping cart"/>
            <SubTitle>You have no items in your shopping cart</SubTitle>
            <Link style={{textDecoration:'none'}} to="/"><Button>Start adding some</Button></Link>
        </Container>
    )

    const FilledCart = () => (
            <Container>
                <Wrapper>
                    <header>Shopping Basket</header>
                    <TextFrame >
                        <Title>Product</Title>
                        <Title>Description</Title>
                        <Title>Quantity</Title>
                        <Title>Amount</Title>
                    </TextFrame>
                    {cart.line_items.map((item) => (
                        <Frame key={item.id}>
                            <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
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
            </Container>
    )

    if(!cart.line_items) return 'Loading...';
    return (
        <div>
            {!cart?.line_items?.length? <EmptyCart/> : <FilledCart/>}
        </div>
    )
}

export default Cart
