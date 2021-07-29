import React from 'react'
import {Container, Frame, InputButton, TextInput, Title, Image, Group, Text} from './styles'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { IconButton } from '@material-ui/core';
const CartItem = ({item, handleUpdateCartQty, handleRemoveFromCart}) => {
    console.log("Show me the item info",item);
    return (
       <Container>
           <Frame>
               <Group>    
                    <Image src={item.media.source}/>
               </Group>
               <Group>   
                    <Title width="380px">{item.name}</Title>
                    <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum</Text>
               </Group>
               <Group>  
                   <InputButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</InputButton>
                   <TextInput>{item.quantity}</TextInput>
                   <InputButton onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</InputButton>
               </Group>
                <Group>
                    <Title>{item.line_total.formatted_with_symbol}</Title>
                </Group>
                <Group>
                <IconButton>
                    <DeleteForeverIcon onClick={() => handleRemoveFromCart(item.id)}/>
                </IconButton>
                </Group>
           </Frame>
       </Container>
    )
}

export default CartItem
