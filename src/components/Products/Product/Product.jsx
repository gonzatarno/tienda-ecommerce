import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import { classes } from 'istanbul-lib-coverage'

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={product.imagen}
            title="Contemplative Reptile"
            />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.nombre}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.precio}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.desc}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
