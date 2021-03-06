import React from 'react';
import {Grid} from '@material-ui/core'
import Product from './Product/Product';
import useStyles from './styles'
import Recommend from './Recommend/Recommend';

const Products = ({products, onAddToCart}) => {
    const classes = useStyles();
    return(
            <main className={classes.content}>
                <header data-aos="fade-right">Potted plants delivered to your door</header>
                    <div className={classes.toolbar}/>
                    <Grid container justify="center" spacing={4}>
                        {products.map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} lg={6}>
                                <Product product={product} onAddToCart={onAddToCart}/>
                            </Grid>
                        ))}
                    </Grid>
                    <Recommend/>
            </main>
    )
}

export default Products;