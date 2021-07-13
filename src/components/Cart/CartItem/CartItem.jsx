import React from 'react'
import {Container, Frame, ImageFrame, Title, Image, Group, Text, Button} from './styles'
import CancelIcon from '@material-ui/icons/Cancel';
const CartItem = ({item}) => {
    console.log(item);
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
                   
                   <Button>-</Button>
                   <Text>{item.quantity}</Text>
                   <Button>+</Button>
               </Group>
                <Group>
                   
                    <Text>{item.price.formatted_with_symbol}</Text>
                </Group>
                <CancelIcon/>
           </Frame>
       </Container>
    )
}

export default CartItem
