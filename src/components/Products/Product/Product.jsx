import React, {useState} from 'react'
import { TopWrapper, SubHeader, BottomWrapper, BottomInner } from './styles'
import { Card, CardMedia,IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import useStyles from './styles'
const Product = ({product,onAddToCart}) => {
const [toggle, setToggle] = useState(true);

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}>
            <BottomWrapper>
                <BottomInner>
                    <SubHeader color='#eee'>{product.name}</SubHeader>
                    <IconButton onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                    </IconButton>
                </BottomInner>
             </BottomWrapper>
            </CardMedia>
             <TopWrapper>
                 <SubHeader>{product.price.formatted_with_symbol}</SubHeader>
                <IconButton 
                    onClick={() => setToggle(!toggle)}>
                    {toggle? <FavoriteBorderIcon/> : <FavoriteIcon/>}
                </IconButton>
             </TopWrapper>
        </Card>
    )
}

export default Product
