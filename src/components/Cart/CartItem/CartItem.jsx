import React from 'react'
import {Container, Frame, InputButton, TextInput, Title,PriceText, Image, Group, Text, Button} from './styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart}) => {
    console.log("Show me the item info",item);
    return (
       <Container>
           <Frame>
               <Group>    
                    <Image src={item.media.source}/>
               </Group>
               <Group>   
                    <Text>{item.name}</Text>
               </Group>
               <Group>  
                   <InputButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</InputButton>
                   <TextInput>{item.quantity}</TextInput>
                   <InputButton onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</InputButton>
               </Group>
                <Group>
                    <PriceText>{item.line_total.formatted_with_symbol}</PriceText>
                </Group>
                <Group>
                    <DeleteForeverIcon onClick={() => handleRemoveFromCart(item.id)}/>
                </Group>
           </Frame>
       </Container>
    )
}

export default CartItem
