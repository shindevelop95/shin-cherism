import React from 'react'
import {Container, Frame, ImageFrame, Title, Image, Group, Text, Button} from './styles'
import CancelIcon from '@material-ui/icons/Cancel';
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
                   <Button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                   <Text>{item.quantity}</Text>
                   <Button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
               </Group>
                <Group>
                    <Text>{item.line_total.formatted_with_symbol}</Text>
                </Group>
                <CancelIcon onClick={() => handleRemoveFromCart(item.id)}/>
           </Frame>
       </Container>
    )
}

export default CartItem
