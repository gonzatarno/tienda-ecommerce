import React from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles'

export const products = [
    {id:1, nombre: 'Zapatillas', desc: 'Zapatillas Running', precio: '$5000', imagen: 'https://essential.vteximg.com.br/arquivos/ids/364329-1000-1000/306-7189_1.jpg?v=637389913508930000'},
    {id:2, nombre: 'Sandalias', desc: 'Sandalias de verano', precio: '$3700', imagen: 'https://essential.vteximg.com.br/arquivos/ids/355608-1000-1000/265-0065_1.jpg?v=637370596627600000'},
    {id:3, nombre: 'Nike Air Force', desc: 'Zapatillas blancas de Nike', precio: '$9000', imagen: 'https://revolutionsneaks.com/3059-thickbox_default/nike-air-force-one.jpg'},
    {id:4, nombre: 'Remera Blanca Puma', desc: 'Remera slim fit', precio: '$2699', imagen: 'https://essential.vteximg.com.br/arquivos/ids/425941-1000-1000/962-1524_1.jpg?v=637552291443430000'}
]


const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) =>(
                    <Grid item key={product.id} xs={10} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;